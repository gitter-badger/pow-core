/*
 Copyright (C) 2013-2015 by Justin DuJardin

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


/// <reference path="../resource.ts"/>

module pow2 {

  declare var $:any;
  /**
   * Use jQuery to load a Javascript file from a URL.
   */
  export class ScriptResource extends Resource {
    load() {
      var request:any = $.getScript(this.url);
      request.done((script:HTMLScriptElement) => {
        this.data = script;
        this.ready();
      });
      request.fail((jqxhr, settings, exception) => {
        this.failed(exception);
      });
    }
  }
}
