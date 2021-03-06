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

/**
 * Constant strings for use in throwing Error with messages.  Used to
 * make checking thrown errors doable without an explosion of Error subclasses.
 */
module pow2.errors {

  /**
   * An invalid combination of arguments was given to a function
   */
  export var INVALID_ARGUMENTS:string = 'invalid arguments';

  /**
   * A division by zero would have occurred
   */
  export var DIVIDE_ZERO:string = 'divide by zero operation';

  /**
   * Something called on a base class that doesn't implement the desired functionality
   */
  export var CLASS_NOT_IMPLEMENTED:string = 'must be implemented in a subclass';

  export var REQUIRED_ARGUMENT:string = 'argument must be valid';

  export var ALREADY_EXISTS:string = 'already exists and would overwrite existing value';

  /**
   * A specified index is out of the valid range for an array it applies to.
   */
  export var INDEX_OUT_OF_RANGE:string = 'index out of range';

  /**
   * An item is not of the expected type or value.
   */
  export var INVALID_ITEM:string = 'invalid item type or value';

}
