/**
 Copyright (C) 2013 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

///<reference path="../types/underscore.d.ts"/>
///<reference path="./resourceLoader.ts"/>
///<reference path="./time.ts"/>
///<reference path="./stateMachine.ts"/>


module pow2 {

   export interface IWorld {
      loader:ResourceLoader;
      time:Time;
      state:IStateMachine;
      mark(object:IWorldObject);
      erase(object:IWorldObject);
      setService(name:string,value:IWorldObject):IWorldObject;
   }
   export interface IWorldObject {
      world:IWorld;
      onAddToWorld?(world:IWorld);
      onRemoveFromWorld?(world:IWorld);
   }


   export class World implements IWorld {
      loader:ResourceLoader = null;
      time:Time;
      state: IStateMachine;
      constructor(services){
         services = _.defaults(services || {},{
            loader: new ResourceLoader,
            time:   new Time({autoStart: true}),
            state:  null
         });
         _.extend(this,services);
         _.each(services,(s:IWorldObject,k) => {
            this.mark(s);
         });
      }

      setService(name:string,value:IWorldObject):IWorldObject{
         this.mark(value);
         this[name] = value;
         return value;
      }

      mark(object:IWorldObject){
         if(object){
            object.world = this;
            if(object.onAddToWorld){
               object.onAddToWorld(this);
            }
         }
      }

      erase(object:IWorldObject){
         if(object){
            if(object.onRemoveFromWorld){
               object.onRemoveFromWorld(this);
            }
            delete object.world;
         }
      }
   }
}