

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']("/", "ips", true, true);
var fileData0 = 'UEFUQ0gGvEgACABOt0YAImcIZyIAACiYGAZ4Ci4F0UYeNngHLgHRA0iHRgB4GBg6MQJOt0YAAGq8BghQvAYIRU9G';
Module['FS_createDataFile']('/ips', 'AllowSpeedDash.ips', decodeBase64(fileData0), true, true, false);
var fileData1 = 'UEFUQ0gAV9QACABJCEcBAGgIaAAAADAGSAEhAXAGSAAhBkiAegAoAdEFSQhHBUkIRwAAL1cCAnlTAgLwXwIC3VcACOVXAAhFT0Y=';
Module['FS_createDataFile']('/ips', 'AutoDashBoots.ips', decodeBase64(fileData1), true, true, false);
var fileData2 = 'UEFUQ0gAf4QACABJCEcBIGcIZyAAABwESAQhAXAwHJwwACFAXgJMIEcAAHlTAgKNfwAIRU9G';
Module['FS_createDataFile']('/ips', 'BrokenMaidens.ips', decodeBase64(fileData2), true, true, false);
var fileData3 = 'UEFUQ0gHwMoAAX4Hze4AAZoH20oAAZoH544AAY4H85wAAcgH/ugAAVpFT0Y=';
Module['FS_createDataFile']('/ips', 'BuffFamiliars.ips', decodeBase64(fileData3), true, true, false);
var fileData4 = 'UEFUQ0gG6VgAAWQG8VoAAX0HB74AB2QhASgA0Y0HCtAAB30hASgA0Z4HDqAABz8hASgA0WQHERQAB24hASgA0a1FT0Y=';
Module['FS_createDataFile']('/ips', 'BuffSubweapons.ips', decodeBase64(fileData4), true, true, false);
var fileData5 = 'UEFUQ0gNfxgAAbMNhYwAAbVFT0Y=';
Module['FS_createDataFile']('/ips', 'CandleFix.ips', decodeBase64(fileData5), true, true, false);
var fileData6 = 'UEFUQ0gA9eoABMBGwEZFT0Y=';
Module['FS_createDataFile']('/ips', 'CardCombosRevealed.ips', decodeBase64(fileData6), true, true, false);
var fileData7 = 'UEFUQ0gF6lAAAsBGBfdkAAgASQhHwYdnCGeHwAA8C0mgeQlcASkI0CCITiFQUmCIUiFQUqB5VCFQUhAcERwAKQHRA0kIR6wwA0oQRwAAdFYCAnn3BQht9wUIRU9G';
Module['FS_createDataFile']('/ips', 'CardUp_v3_Custom.ips', decodeBase64(fileData7), true, true, false);
var fileData8 = 'UEFUQ0gBBCgAAgEhRU9G';
Module['FS_createDataFile']('/ips', 'DemoForceFirst.ips', decodeBase64(fileData8), true, true, false);
var fileData9 = 'UEFUQ0gA42AACABJj0YAHWcIZx0AAEKxIIAANBgESQh4NSgI0FcoBtACSiAcl0ZQAAACaOMACEAiqFxHMCFcACkB0aBcqFRBIqhcUTAhXAAp6tGgXKhU5+dFT0Z///8=';
Module['FS_createDataFile']('/ips', 'DSSGlitchFix.ips', decodeBase64(fileData9), true, true, false);
var fileData10 = 'UEFUQ0gAn5IAAh4jAL/SAAIeIQCRZgACAABFT0Y=';
Module['FS_createDataFile']('/ips', 'GameClearBypass.ips', decodeBase64(fileData10), true, true, false);
var fileData11 = 'UEFUQ0hcLqwAAwsAAVwvYAADAQAKXdJQAAMBAAhFT0Y=';
Module['FS_createDataFile']('/ips', 'MapEdits.ips', decodeBase64(fileData11), true, true, false);
var fileData12 = 'UEFUQ0gOSKgAAgAARU9G';
Module['FS_createDataFile']('/ips', 'MPComboFix.ips', decodeBase64(fileData12), true, true, false);
var fileData13 = 'UEFUQ0gAy2YANjJOAEiHRiAfZwjARsBGwEbARsBGwEbARsBGwEbARgAgMRwqSgPw4/jzIIAAAjBIRAB4MRwnSgDMNAAF+GgABvQA37cAAdsJW6AAAwAfZwlsIQAB2mcfAAAYA0ghGAh4ATAIcAJIh0YAAM4DAADkWwkIZx8gADwYJAVJBUoQiAiAAjwCMgIxACz43AhJj0biaAAGQB9nCPpR+VE5UVxRAFAAUABQAFAAUABQKVEAUITLAAhFT0Y=';
Module['FS_createDataFile']('/ips', 'MultiLastKey.ips', decodeBase64(fileData13), true, true, false);
var fileData14 = 'UEFUQ0gMs1AAAQAMs2gAAQAMtFgAAQAMtGwAAQAMtJQAAQAMtQwAAQAMtTAAAQAMtUgAAQAMtYQAAQAMtawAAQAMtdQAAQAMtfwAAQAMtiAAAQAMtjQAAQAMtnQAAQAMtpwAAQAMtxAAAQAMt4wAAQAMt7AAAQAMuEAAAQAMuJAAAQAMuKQAAQAMuOAAAQAMueQAAQAMukgAAQAMuoQAAQAMu4gAAQAMu8AAAQAMu9gAAQAMvFAAAQAMvJwAAQAMvMgAAQAMvRQABQAA+gAsDL08AAUrAPoALAy9aAABKwy9fAABK0VPRg==';
Module['FS_createDataFile']('/ips', 'NoDSSDrops.ips', decodeBase64(fileData14), true, true, false);
var fileData15 = 'UEFUQ0gGMEgAAQAGsUgAAsBGBrFhAAHgBrGAAAEARU9G';
Module['FS_createDataFile']('/ips', 'PermanentDash.ips', decodeBase64(fileData15), true, true, false);
var fileData16 = 'UEFUQ0gAyiAACABIh0YAIWcIZyEAAED6MQEgCHAGSgZJCiMQiAiAATsCMgIxACv43ANIsSGHRiwhZwhmbAAGKMoACDdQOFA5UDpQO1A8UD1QPlA/UEBQRU9G';
Module['FS_createDataFile']('/ips', 'SeedDisplay.ips', decodeBase64(fileData16), true, true, false);
var fileData17 = 'UEFUQ0gOCPwAA2QACkVPRg==';
Module['FS_createDataFile']('/ips', 'ShooterStrength.ips', decodeBase64(fileData17), true, true, false);
var fileData18 = 'UEFUQ0gNKvAAAgF/RU9G';
Module['FS_createDataFile']('/ips', 'SoftlockBlockFix.ips', decodeBase64(fileData18), true, true, false);

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": []});
  
  })();
  

    // All the pre-js content up to here must remain later on, we need to run
    // it.
    var necessaryPreJSTasks = Module['preRun'].slice();
  
    if (!Module['preRun']) throw 'Module.preRun should exist because file support used it; did a pre-js delete it?';
    necessaryPreJSTasks.forEach(function(task) {
      if (Module['preRun'].indexOf(task) < 0) throw 'All preRun tasks that exist before user pre-js code should remain after; did you replace Module or modify Module.preRun?';
    });
  

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Normally we don't log exceptions but instead let them bubble out the top
// level where the embedding environment (e.g. the browser) can handle
// them.
// However under v8 and node we sometimes exit the process direcly in which case
// its up to use us to log the exception before exiting.
// If we fix https://github.com/emscripten-core/emscripten/issues/15080
// this may no longer be needed under node.
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  var toLog = e;
  if (e && typeof e === 'object' && e.stack) {
    toLog = [e, e.stack];
  }
  err('exiting due to exception: ' + toLog);
}

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (!(typeof process === 'object' && typeof require === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

readAsync = function readAsync(filename, onload, onerror) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    onload(ret);
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  nodeFS['readFile'](filename, function(err, data) {
    if (err) onerror(err);
    else onload(data.buffer);
  });
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  // Without this older versions of node (< v15) will log unhandled rejections
  // but return 0, which is not normally the desired behaviour.  This is
  // not be needed with node v15 and about because it is now the default
  // behaviour:
  // See https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode
  process['on']('unhandledRejection', function(reason) { throw reason; });

  quit_ = function(status, toThrow) {
    if (keepRuntimeAlive()) {
      process['exitCode'] = status;
      throw toThrow;
    }
    logExceptionOnExit(toThrow);
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process === 'object' && typeof require === 'function') || typeof window === 'object' || typeof importScripts === 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  readAsync = function readAsync(f, onload, onerror) {
    setTimeout(function() { onload(readBinary(f)); }, 0);
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status, toThrow) {
      logExceptionOnExit(toThrow);
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window === 'object' || typeof importScripts === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];
if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) {
  Object.defineProperty(Module, 'arguments', {
    configurable: true,
    get: function() {
      abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) {
  Object.defineProperty(Module, 'thisProgram', {
    configurable: true,
    get: function() {
      abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['quit']) quit_ = Module['quit'];
if (!Object.getOwnPropertyDescriptor(Module, 'quit')) {
  Object.defineProperty(Module, 'quit', {
    configurable: true,
    get: function() {
      abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');

if (!Object.getOwnPropertyDescriptor(Module, 'read')) {
  Object.defineProperty(Module, 'read', {
    configurable: true,
    get: function() {
      abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) {
  Object.defineProperty(Module, 'readAsync', {
    configurable: true,
    get: function() {
      abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) {
  Object.defineProperty(Module, 'readBinary', {
    configurable: true,
    get: function() {
      abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) {
  Object.defineProperty(Module, 'setWindowTitle', {
    configurable: true,
    get: function() {
      abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';


assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");




var STACK_ALIGN = 16;

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) {
  Object.defineProperty(Module, 'wasmBinary', {
    configurable: true,
    get: function() {
      abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var noExitRuntime = Module['noExitRuntime'] || true;
if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) {
  Object.defineProperty(Module, 'noExitRuntime', {
    configurable: true,
    get: function() {
      abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  function onDone(ret) {
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }

  ret = onDone(ret);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u > 0x10FFFF) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;
if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) {
  Object.defineProperty(Module, 'INITIAL_MEMORY', {
    configurable: true,
    get: function() {
      abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 16777216, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grows downwards
  HEAPU32[(max >> 2)+1] = 0x2135467;
  HEAPU32[(max >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[(max >> 2)+1];
  var cookie2 = HEAPU32[(max >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;
var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile;
  wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAAB9IGAgAAkYAN/f38Bf2ABfwF/YAJ/fwF/YAABf2ABfwBgAn9/AGAFf35+fn4AYAR/f39/AX9gA39+fwF+YAAAYAR/f39/AGAFf39/f38Bf2AEf35+fwBgBn9/f39/fwBgA39+fwF/YAJ+fwF/YAR+fn5+AX9gB39/f39/f38Bf2AGf3x/f39/AX9gA39/fwBgA35/fwF/YAV/f39/fwBgAn9+AGADf35+AGAHf39/f39/fwBgAn9/AX5gBH9/f34BfmADf39+AGACf3wAYAJ/fQBgAn5+AXxgAn5+AX1gAnx/AXxgAn5+AX9gBH9/fn8BfmAEf35/fwF/ApSCgIAACwNlbnYEZXhpdAAEA2VudgpfX3N5c19vcGVuAAAWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQhmZF9jbG9zZQABA2Vudg1fX3N5c19mY250bDY0AAADZW52C19fc3lzX2lvY3RsAAAWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQdmZF9yZWFkAAcWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQhmZF93cml0ZQAHA2VudhZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwAAEDZW52FWVtc2NyaXB0ZW5fbWVtY3B5X2JpZwAAA2VudgtzZXRUZW1wUmV0MAAEFndhc2lfc25hcHNob3RfcHJldmlldzEHZmRfc2VlawALA4mBgIAAhwEJAwMCAgoNAAUFBQUFBAMEAQEBAAMBAgACBw4OAAMJAAEDAAILERMBChQPDxUAARYBBgwXCg0YGRoHAQACGwAAAQIBAQEACAAAAQEAAAICAgICBAQBBgwQEAYcHQUFAwMMBgYGHh8BBAICBQMBBiAhAAABAgAHAQgCAgEBBAEDBAEJAwMiCyMEhYCAgAABcAEICAWGgICAAAEBgAKAAgaTgICAAAN/AUHQ/MACC38BQQALfwFBAAsHroKAgAARBm1lbW9yeQIAEV9fd2FzbV9jYWxsX2N0b3JzAAsSY290bXJfY29yZV92ZXJzaW9uAAwRY290bXJfb3B0aW9uX2xpc3QADQ9jb3Rtcl9yYW5kb21pemUADhBfX2Vycm5vX2xvY2F0aW9uAB8GZmZsdXNoABwEZnJlZQByGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAAZtYWxsb2MAcQlz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ACABNQIANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKQMANwMADwsgAiACKAIAIgFBBGo2AgAgACABMgEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMwEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMAAANwMADwsgAiACKAIAIgFBBGo2AgAgACABMQAANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKwMAOQMADwsgACACIAMRBQALCz4BAX8CQCAAUA0AA0AgAUF/aiIBIACnQQ9xQaDnAGotAAAgAnI6AAAgAEIPViEDIABCBIghACADDQALCyABCzYBAX8CQCAAUA0AA0AgAUF/aiIBIACnQQdxQTByOgAAIABCB1YhAiAAQgOIIQAgAg0ACwsgAQuIAQIBfgN/AkACQCAAQoCAgIAQWg0AIAAhAgwBCwNAIAFBf2oiASAAIABCCoAiAkIKfn2nQTByOgAAIABC/////58BViEDIAIhACADDQALCwJAIAKnIgNFDQADQCABQX9qIgEgAyADQQpuIgRBCmxrQTByOgAAIANBCUshBSAEIQMgBQ0ACwsgAQtwAQF/IwBBgAJrIgUkAAJAIARBgMAEcQ0AIAIgA0wNACAFIAFB/wFxIAIgA2siAkGAAiACQYACSSIDGxB8GgJAIAMNAANAIAAgBUGAAhAxIAJBgH5qIgJB/wFLDQALCyAAIAUgAhAxCyAFQYACaiQACw4AIAAgASACQQBBABAvCxAAIABBIEYgAEF3akEFSXILPwICfwF+IAAgATcDcCAAIAAoAggiAiAAKAIEIgNrrCIENwN4IAAgAyABp2ogAiAEIAFVGyACIAFCAFIbNgJoC7oBAgF+BH8CQAJAAkAgACkDcCIBUA0AIAApA3ggAVkNAQsgABBVIgJBf0oNAQsgAEEANgJoQX8PCyAAKAIIIgMhBAJAIAApA3AiAVANACADIQQgASAAKQN4Qn+FfCIBIAMgACgCBCIFa6xZDQAgBSABp2ohBAsgACAENgJoIAAoAgQhBAJAIANFDQAgACAAKQN4IAMgBGtBAWqsfDcDeAsCQCACIARBf2oiAC0AAEYNACAAIAI6AAALIAILNQAgACABNwMAIAAgBEIwiKdBgIACcSACQjCIp0H//wFxcq1CMIYgAkL///////8/g4Q3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ag4GAAECAgQDBAsgACACPAAADwsgACACPQEADwsgACACPgIADwsgACACNwMACwtHAQF/IwBBkAFrIgMkACADQQBBkAEQfCIDQX82AkwgAyAANgIsIANBATYCICADIAA2AlQgAyABIAIQRiEAIANBkAFqJAAgAAsKACAAIAEgAhBTCy8BAn8gABAoIgEoAgA2AjgCQCABKAIAIgJFDQAgAiAANgI0CyABIAA2AgAQKSAAC8ACAQJ/IwBBIGsiAiQAAkACQAJAAkBB6AsgASwAABBYDQAQH0EcNgIADAELQZgJEHEiAw0BC0EAIQMMAQsgA0EAQZABEHwaAkAgAUErEFgNACADQQhBBCABLQAAQfIARhs2AgALAkACQCABLQAAQeEARg0AIAMoAgAhAQwBCwJAIABBA0EAEAMiAUGACHENACACIAFBgAhyNgIQIABBBCACQRBqEAMaCyADIAMoAgBBgAFyIgE2AgALIANB/wE6AEsgA0GACDYCMCADIAA2AjwgAyADQZgBajYCLAJAIAFBCHENACACIAJBGGo2AgAgAEGTqAEgAhAEDQAgA0EKOgBLCyADQQI2AiggA0EDNgIkIANBBDYCICADQQU2AgwCQEGI8AAoAgQNACADQX82AkwLIAMQSyEDCyACQSBqJAAgAwtxAQF/QQIhAQJAIABBKxBYDQAgAC0AAEHyAEchAQsgAUGAAXIgASAAQfgAEFgbIgFBgIAgciABIABB5QAQWBsiASABQcAAciAALQAAIgBB8gBGGyIBQYAEciABIABB9wBGGyIBQYAIciABIABB4QBGGwsEACAACwsAIAAoAjwQThACC9cBAQR/IwBBIGsiAyQAIAMgATYCECADIAIgACgCMCIEQQBHazYCFCAAKAIsIQUgAyAENgIcIAMgBTYCGEF/IQQCQAJAAkAgACgCPCADQRBqQQIgA0EMahAFEF8NACADKAIMIgRBAEoNAQsgACAEQTBxQRBzIAAoAgByNgIADAELIAQgAygCFCIGTQ0AIAAgACgCLCIFNgIEIAAgBSAEIAZrajYCCAJAIAAoAjBFDQAgACAFQQFqNgIEIAIgAWpBf2ogBS0AADoAAAsgAiEECyADQSBqJAAgBAs7AQF/IwBBEGsiAyQAIAAoAjwgASACQf8BcSADQQhqEJEBEF8hACADKQMIIQEgA0EQaiQA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IgAtAABFDQBBACAAQQFqNgLMcCAAQQA6AAAgAg8LQQBBADYCzHALIAILAgALAgALFQACQCAADQBBAA8LEB8gADYCAEF/C+8KAgR/BH4jAEHwAGsiBSQAIARC////////////AIMhCQJAAkACQCABQn98IgpCf1EgAkL///////////8AgyILIAogAVStfEJ/fCIKQv///////7///wBWIApC////////v///AFEbDQAgA0J/fCIKQn9SIAkgCiADVK18Qn98IgpC////////v///AFQgCkL///////+///8AURsNAQsCQCABUCALQoCAgICAgMD//wBUIAtCgICAgICAwP//AFEbDQAgAkKAgICAgIAghCEEIAEhAwwCCwJAIANQIAlCgICAgICAwP//AFQgCUKAgICAgIDA//8AURsNACAEQoCAgICAgCCEIQQMAgsCQCABIAtCgICAgICAwP//AIWEQgBSDQBCgICAgICA4P//ACACIAMgAYUgBCAChUKAgICAgICAgIB/hYRQIgYbIQRCACABIAYbIQMMAgsgAyAJQoCAgICAgMD//wCFhFANAQJAIAEgC4RCAFINACADIAmEQgBSDQIgAyABgyEDIAQgAoMhBAwCCyADIAmEUEUNACABIQMgAiEEDAELIAMgASADIAFWIAkgC1YgCSALURsiBxshCSAEIAIgBxsiC0L///////8/gyEKIAIgBCAHGyICQjCIp0H//wFxIQgCQCALQjCIp0H//wFxIgYNACAFQeAAaiAJIAogCSAKIApQIgYbeSAGQQZ0rXynIgZBcWoQYUEQIAZrIQYgBUHoAGopAwAhCiAFKQNgIQkLIAEgAyAHGyEDIAJC////////P4MhBAJAIAgNACAFQdAAaiADIAQgAyAEIARQIgcbeSAHQQZ0rXynIgdBcWoQYUEQIAdrIQggBUHYAGopAwAhBCAFKQNQIQMLIARCA4YgA0I9iIRCgICAgICAgASEIQQgCkIDhiAJQj2IhCEBIANCA4YhAyALIAKFIQoCQCAGIAhrIgdFDQACQCAHQf8ATQ0AQgAhBEIBIQMMAQsgBUHAAGogAyAEQYABIAdrEGEgBUEwaiADIAQgBxBrIAUpAzAgBSkDQCAFQcAAakEIaikDAIRCAFKthCEDIAVBMGpBCGopAwAhBAsgAUKAgICAgICABIQhDCAJQgOGIQICQAJAIApCf1UNAAJAIAIgA30iASAMIAR9IAIgA1StfSIEhFBFDQBCACEDQgAhBAwDCyAEQv////////8DVg0BIAVBIGogASAEIAEgBCAEUCIHG3kgB0EGdK18p0F0aiIHEGEgBiAHayEGIAVBKGopAwAhBCAFKQMgIQEMAQsgBCAMfCADIAJ8IgEgA1StfCIEQoCAgICAgIAIg1ANACABQgGIIARCP4aEIAFCAYOEIQEgBkEBaiEGIARCAYghBAsgC0KAgICAgICAgIB/gyECAkAgBkH//wFIDQAgAkKAgICAgIDA//8AhCEEQgAhAwwBC0EAIQcCQAJAIAZBAEwNACAGIQcMAQsgBUEQaiABIAQgBkH/AGoQYSAFIAEgBEEBIAZrEGsgBSkDACAFKQMQIAVBEGpBCGopAwCEQgBSrYQhASAFQQhqKQMAIQQLIAFCA4ggBEI9hoQhAyAHrUIwhiAEQgOIQv///////z+DhCAChCEEIAGnQQdxIQYCQAJAAkACQAJAEGkOAwABAgMLIAQgAyAGQQRLrXwiASADVK18IQQCQCAGQQRGDQAgASEDDAMLIAQgAUIBgyICIAF8IgMgAlStfCEEDAMLIAQgAyACQgBSIAZBAEdxrXwiASADVK18IQQgASEDDAELIAQgAyACUCAGQQBHca18IgEgA1StfCEEIAEhAwsgBkUNAQsQahoLIAAgAzcDACAAIAQ3AwggBUHwAGokAAtTAQF+AkACQCADQcAAcUUNACABIANBQGqthiECQgAhAQwBCyADRQ0AIAFBwAAgA2utiCACIAOtIgSGhCECIAEgBIYhAQsgACABNwMAIAAgAjcDCAvgAQIBfwJ+QQEhBAJAIABCAFIgAUL///////////8AgyIFQoCAgICAgMD//wBWIAVCgICAgICAwP//AFEbDQAgAkIAUiADQv///////////wCDIgZCgICAgICAwP//AFYgBkKAgICAgIDA//8AURsNAAJAIAIgAIQgBiAFhIRQRQ0AQQAPCwJAIAMgAYNCAFMNAEF/IQQgACACVCABIANTIAEgA1EbDQEgACAChSABIAOFhEIAUg8LQX8hBCAAIAJWIAEgA1UgASADURsNACAAIAKFIAEgA4WEQgBSIQQLIAQL2AECAX8CfkF/IQQCQCAAQgBSIAFC////////////AIMiBUKAgICAgIDA//8AViAFQoCAgICAgMD//wBRGw0AIAJCAFIgA0L///////////8AgyIGQoCAgICAgMD//wBWIAZCgICAgICAwP//AFEbDQACQCACIACEIAYgBYSEUEUNAEEADwsCQCADIAGDQgBTDQAgACACVCABIANTIAEgA1EbDQEgACAChSABIAOFhEIAUg8LIAAgAlYgASADVSABIANRGw0AIAAgAoUgASADhYRCAFIhBAsgBAvaEAIFfw5+IwBB0AJrIgUkACAEQv///////z+DIQogAkL///////8/gyELIAQgAoVCgICAgICAgICAf4MhDCAEQjCIp0H//wFxIQYCQAJAAkAgAkIwiKdB//8BcSIHQX9qQf3/AUsNAEEAIQggBkF/akH+/wFJDQELAkAgAVAgAkL///////////8AgyINQoCAgICAgMD//wBUIA1CgICAgICAwP//AFEbDQAgAkKAgICAgIAghCEMDAILAkAgA1AgBEL///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbDQAgBEKAgICAgIAghCEMIAMhAQwCCwJAIAEgDUKAgICAgIDA//8AhYRCAFINAAJAIAMgAkKAgICAgIDA//8AhYRQRQ0AQgAhAUKAgICAgIDg//8AIQwMAwsgDEKAgICAgIDA//8AhCEMQgAhAQwCCwJAIAMgAkKAgICAgIDA//8AhYRCAFINAEIAIQEMAgsCQCABIA2EQgBSDQBCgICAgICA4P//ACAMIAMgAoRQGyEMQgAhAQwCCwJAIAMgAoRCAFINACAMQoCAgICAgMD//wCEIQxCACEBDAILQQAhCAJAIA1C////////P1YNACAFQcACaiABIAsgASALIAtQIggbeSAIQQZ0rXynIghBcWoQYUEQIAhrIQggBUHIAmopAwAhCyAFKQPAAiEBCyACQv///////z9WDQAgBUGwAmogAyAKIAMgCiAKUCIJG3kgCUEGdK18pyIJQXFqEGEgCSAIakFwaiEIIAVBuAJqKQMAIQogBSkDsAIhAwsgBUGgAmogA0IxiCAKQoCAgICAgMAAhCIOQg+GhCICQgBCgICAgLDmvIL1ACACfSIEQgAQbSAFQZACakIAIAVBoAJqQQhqKQMAfUIAIARCABBtIAVBgAJqIAUpA5ACQj+IIAVBkAJqQQhqKQMAQgGGhCIEQgAgAkIAEG0gBUHwAWogBEIAQgAgBUGAAmpBCGopAwB9QgAQbSAFQeABaiAFKQPwAUI/iCAFQfABakEIaikDAEIBhoQiBEIAIAJCABBtIAVB0AFqIARCAEIAIAVB4AFqQQhqKQMAfUIAEG0gBUHAAWogBSkD0AFCP4ggBUHQAWpBCGopAwBCAYaEIgRCACACQgAQbSAFQbABaiAEQgBCACAFQcABakEIaikDAH1CABBtIAVBoAFqIAJCACAFKQOwAUI/iCAFQbABakEIaikDAEIBhoRCf3wiBEIAEG0gBUGQAWogA0IPhkIAIARCABBtIAVB8ABqIARCAEIAIAVBoAFqQQhqKQMAIAUpA6ABIgogBUGQAWpBCGopAwB8IgIgClStfCACQgFWrXx9QgAQbSAFQYABakIBIAJ9QgAgBEIAEG0gCCAHIAZraiEGAkACQCAFKQNwIg9CAYYiECAFKQOAAUI/iCAFQYABakEIaikDACIRQgGGhHwiDUKZk398IhJCIIgiAiALQoCAgICAgMAAhCITQh+IQv////8PgyIEfiIUIAFCH4hC/////w+DIgogBUHwAGpBCGopAwBCAYYgD0I/iIQgEUI/iHwgDSAQVK18IBIgDVStfEJ/fCIPQiCIIg1+fCIQIBRUrSAQIA9C/////w+DIg8gAUI/iCIVIAtCAYaEQv////8PgyILfnwiESAQVK18IAQgDX58IA8gBH4iFCALIA1+fCIQIBRUrUIghiAQQiCIhHwgESAQQiCGfCIQIBFUrXwgECAPIAFCAYYiFkL+////D4MiEX4iFyASQv////8PgyISIAt+fCIUIBdUrSAUIAIgCn58IhcgFFStfHwiFCAQVK18IBQgEiAEfiIQIBEgDX58IgQgDyAKfnwiDSACIAt+fCIPQiCIIAQgEFStIA0gBFStfCAPIA1UrXxCIIaEfCIEIBRUrXwgBCAXIAIgEX4iAiASIAp+fCIKQiCIIAogAlStQiCGhHwiAiAXVK0gAiAPQiCGfCACVK18fCICIARUrXwiBEL/////////AFYNACATQgGGIBWEIRMgBUHQAGogAiAEIAMgDhBtIAFCMYYgBUHQAGpBCGopAwB9IAUpA1AiAUIAUq19IQ0gBkH+/wBqIQZCACABfSEKDAELIAVB4ABqIAJCAYggBEI/hoQiAiAEQgGIIgQgAyAOEG0gAUIwhiAFQeAAakEIaikDAH0gBSkDYCIKQgBSrX0hDSAGQf//AGohBkIAIAp9IQogASEWCwJAIAZB//8BSA0AIAxCgICAgICAwP//AIQhDEIAIQEMAQsCQAJAIAZBAUgNACANQgGGIApCP4iEIQ0gBq1CMIYgBEL///////8/g4QhDyAKQgGGIQQMAQsCQCAGQY9/Sg0AQgAhAQwCCyAFQcAAaiACIARBASAGaxBrIAVBMGogFiATIAZB8ABqEGEgBUEgaiADIA4gBSkDQCICIAVBwABqQQhqKQMAIg8QbSAFQTBqQQhqKQMAIAVBIGpBCGopAwBCAYYgBSkDICIBQj+IhH0gBSkDMCIEIAFCAYYiAVStfSENIAQgAX0hBAsgBUEQaiADIA5CA0IAEG0gBSADIA5CBUIAEG0gDyACIAJCAYMiASAEfCIEIANWIA0gBCABVK18IgEgDlYgASAOURutfCIDIAJUrXwiAiADIAJCgICAgICAwP//AFQgBCAFKQMQViABIAVBEGpBCGopAwAiAlYgASACURtxrXwiAiADVK18IgMgAiADQoCAgICAgMD//wBUIAQgBSkDAFYgASAFQQhqKQMAIgRWIAEgBFEbca18IgEgAlStfCAMhCEMCyAAIAE3AwAgACAMNwMIIAVB0AJqJAALjQICAn8DfiMAQRBrIgIkAAJAAkAgAb0iBEL///////////8AgyIFQoCAgICAgIB4fEL/////////7/8AVg0AIAVCPIYhBiAFQgSIQoCAgICAgICAPHwhBQwBCwJAIAVCgICAgICAgPj/AFQNACAEQjyGIQYgBEIEiEKAgICAgIDA//8AhCEFDAELAkAgBVBFDQBCACEGQgAhBQwBCyACIAVCACAEp2dBIGogBUIgiKdnIAVCgICAgBBUGyIDQTFqEGEgAkEIaikDAEKAgICAgIDAAIVBjPgAIANrrUIwhoQhBSACKQMAIQYLIAAgBjcDACAAIAUgBEKAgICAgICAgIB/g4Q3AwggAkEQaiQAC+ABAgN/An4jAEEQayICJAACQAJAIAG8IgNB/////wdxIgRBgICAfGpB////9wdLDQAgBK1CGYZCgICAgICAgMA/fCEFQgAhBgwBCwJAIARBgICA/AdJDQAgA61CGYZCgICAgICAwP//AIQhBUIAIQYMAQsCQCAEDQBCACEGQgAhBQwBCyACIAStQgAgBGciBEHRAGoQYSACQQhqKQMAQoCAgICAgMAAhUGJ/wAgBGutQjCGhCEFIAIpAwAhBgsgACAGNwMAIAAgBSADQYCAgIB4ca1CIIaENwMIIAJBEGokAAuMAQICfwJ+IwBBEGsiAiQAAkACQCABDQBCACEEQgAhBQwBCyACIAEgAUEfdSIDaiADcyIDrUIAIANnIgNB0QBqEGEgAkEIaikDAEKAgICAgIDAAIVBnoABIANrrUIwhnwgAUGAgICAeHGtQiCGhCEFIAIpAwAhBAsgACAENwMAIAAgBTcDCCACQRBqJAALcQIBfwJ+IwBBEGsiAiQAAkACQCABDQBCACEDQgAhBAwBCyACIAGtQgAgAWciAUHRAGoQYSACQQhqKQMAQoCAgICAgMAAhUGegAEgAWutQjCGfCEEIAIpAwAhAwsgACADNwMAIAAgBDcDCCACQRBqJAALBABBAAsEAEEAC1MBAX4CQAJAIANBwABxRQ0AIAIgA0FAaq2IIQFCACECDAELIANFDQAgAkHAACADa62GIAEgA60iBIiEIQEgAiAEiCECCyAAIAE3AwAgACACNwMIC+ULAgV/D34jAEHgAGsiBSQAIAFCIIggAkIghoQhCiADQhGIIARCL4aEIQsgA0IxiCAEQv///////z+DIgxCD4aEIQ0gBCAChUKAgICAgICAgIB/gyEOIAJC////////P4MiD0IgiCEQIAxCEYghESAEQjCIp0H//wFxIQYCQAJAAkAgAkIwiKdB//8BcSIHQX9qQf3/AUsNAEEAIQggBkF/akH+/wFJDQELAkAgAVAgAkL///////////8AgyISQoCAgICAgMD//wBUIBJCgICAgICAwP//AFEbDQAgAkKAgICAgIAghCEODAILAkAgA1AgBEL///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbDQAgBEKAgICAgIAghCEOIAMhAQwCCwJAIAEgEkKAgICAgIDA//8AhYRCAFINAAJAIAMgAoRQRQ0AQoCAgICAgOD//wAhDkIAIQEMAwsgDkKAgICAgIDA//8AhCEOQgAhAQwCCwJAIAMgAkKAgICAgIDA//8AhYRCAFINACABIBKEIQJCACEBAkAgAlBFDQBCgICAgICA4P//ACEODAMLIA5CgICAgICAwP//AIQhDgwCCwJAIAEgEoRCAFINAEIAIQEMAgsCQCADIAKEQgBSDQBCACEBDAILQQAhCAJAIBJC////////P1YNACAFQdAAaiABIA8gASAPIA9QIggbeSAIQQZ0rXynIghBcWoQYUEQIAhrIQggBSkDUCIBQiCIIAVB2ABqKQMAIg9CIIaEIQogD0IgiCEQCyACQv///////z9WDQAgBUHAAGogAyAMIAMgDCAMUCIJG3kgCUEGdK18pyIJQXFqEGEgCCAJa0EQaiEIIAUpA0AiA0IxiCAFQcgAaikDACICQg+GhCENIANCEYggAkIvhoQhCyACQhGIIRELIAtC/////w+DIgIgAUL/////D4MiBH4iEyADQg+GQoCA/v8PgyIBIApC/////w+DIgN+fCIKQiCGIgwgASAEfnwiCyAMVK0gAiADfiIUIAEgD0L/////D4MiDH58IhIgDUL/////D4MiDyAEfnwiDSAKQiCIIAogE1StQiCGhHwiEyACIAx+IhUgASAQQoCABIQiCn58IhAgDyADfnwiFiARQv////8Hg0KAgICACIQiASAEfnwiEUIghnwiF3whBCAHIAZqIAhqQYGAf2ohBgJAAkAgDyAMfiIYIAIgCn58IgIgGFStIAIgASADfnwiAyACVK18IAMgEiAUVK0gDSASVK18fCICIANUrXwgASAKfnwgASAMfiIDIA8gCn58IgEgA1StQiCGIAFCIIiEfCACIAFCIIZ8IgEgAlStfCABIBFCIIggECAVVK0gFiAQVK18IBEgFlStfEIghoR8IgMgAVStfCADIBMgDVStIBcgE1StfHwiAiADVK18IgFCgICAgICAwACDUA0AIAZBAWohBgwBCyALQj+IIQMgAUIBhiACQj+IhCEBIAJCAYYgBEI/iIQhAiALQgGGIQsgAyAEQgGGhCEECwJAIAZB//8BSA0AIA5CgICAgICAwP//AIQhDkIAIQEMAQsCQAJAIAZBAEoNAAJAQQEgBmsiB0GAAUkNAEIAIQEMAwsgBUEwaiALIAQgBkH/AGoiBhBhIAVBIGogAiABIAYQYSAFQRBqIAsgBCAHEGsgBSACIAEgBxBrIAUpAyAgBSkDEIQgBSkDMCAFQTBqQQhqKQMAhEIAUq2EIQsgBUEgakEIaikDACAFQRBqQQhqKQMAhCEEIAVBCGopAwAhASAFKQMAIQIMAQsgBq1CMIYgAUL///////8/g4QhAQsgASAOhCEOAkAgC1AgBEJ/VSAEQoCAgICAgICAgH9RGw0AIA4gAkIBfCIBIAJUrXwhDgwBCwJAIAsgBEKAgICAgICAgIB/hYRCAFENACACIQEMAQsgDiACIAJCAYN8IgEgAlStfCEOCyAAIAE3AwAgACAONwMIIAVB4ABqJAALdQEBfiAAIAQgAX4gAiADfnwgA0IgiCIEIAFCIIgiAn58IANC/////w+DIgMgAUL/////D4MiAX4iBUIgiCADIAJ+fCIDQiCIfCADQv////8PgyAEIAF+fCIDQiCIfDcDCCAAIANCIIYgBUL/////D4OENwMAC0cBAX8jAEEQayIFJAAgBSABIAIgAyAEQoCAgICAgICAgH+FEGAgBSkDACEBIAAgBUEIaikDADcDCCAAIAE3AwAgBUEQaiQAC+gDAgJ/An4jAEEgayICJAACQAJAIAFC////////////AIMiBEKAgICAgIDA/0N8IARCgICAgICAwIC8f3xaDQAgAEI8iCABQgSGhCEEAkAgAEL//////////w+DIgBCgYCAgICAgIAIVA0AIARCgYCAgICAgIDAAHwhBQwCCyAEQoCAgICAgICAwAB8IQUgAEKAgICAgICAgAiFQgBSDQEgBSAEQgGDfCEFDAELAkAgAFAgBEKAgICAgIDA//8AVCAEQoCAgICAgMD//wBRGw0AIABCPIggAUIEhoRC/////////wODQoCAgICAgID8/wCEIQUMAQtCgICAgICAgPj/ACEFIARC////////v//DAFYNAEIAIQUgBEIwiKciA0GR9wBJDQAgAkEQaiAAIAFC////////P4NCgICAgICAwACEIgQgA0H/iH9qEGEgAiAAIARBgfgAIANrEGsgAikDACIEQjyIIAJBCGopAwBCBIaEIQUCQCAEQv//////////D4MgAikDECACQRBqQQhqKQMAhEIAUq2EIgRCgYCAgICAgIAIVA0AIAVCAXwhBQwBCyAEQoCAgICAgICACIVCAFINACAFQgGDIAV8IQULIAJBIGokACAFIAFCgICAgICAgICAf4OEvwvCAwIDfwF+IwBBIGsiAiQAAkACQCABQv//////////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ATYCCAsLBwA/AEEQdAtQAQJ/QQAoAtBuIgEgAEEDakF8cSICaiEAAkACQCACRQ0AIAAgAU0NAQsCQCAAEHZNDQAgABAHRQ0BC0EAIAA2AtBuIAEPCxAfQTA2AgBBfwvMBgIEfwN+IwBBgAFrIgUkAAJAAkACQCADIARCAEIAEGJFDQAgAyAEEHpFDQAgAkIwiKciBkH//wFxIgdB//8BRw0BCyAFQRBqIAEgAiADIAQQbCAFIAUpAxAiBCAFQRBqQQhqKQMAIgMgBCADEGQgBUEIaikDACECIAUpAwAhBAwBCwJAIAEgB61CMIYgAkL///////8/g4QiCSADIARCMIinQf//AXEiCK1CMIYgBEL///////8/g4QiChBiQQBKDQACQCABIAkgAyAKEGJFDQAgASEEDAILIAVB8ABqIAEgAkIAQgAQbCAFQfgAaikDACECIAUpA3AhBAwBCwJAAkAgB0UNACABIQQMAQsgBUHgAGogASAJQgBCgICAgICAwLvAABBsIAVB6ABqKQMAIglCMIinQYh/aiEHIAUpA2AhBAsCQCAIDQAgBUHQAGogAyAKQgBCgICAgICAwLvAABBsIAVB2ABqKQMAIgpCMIinQYh/aiEIIAUpA1AhAwsgCkL///////8/g0KAgICAgIDAAIQhCyAJQv///////z+DQoCAgICAgMAAhCEJAkAgByAITA0AA0ACQAJAIAkgC30gBCADVK19IgpCAFMNAAJAIAogBCADfSIEhEIAUg0AIAVBIGogASACQgBCABBsIAVBKGopAwAhAiAFKQMgIQQMBQsgCkIBhiAEQj+IhCEJDAELIAlCAYYgBEI/iIQhCQsgBEIBhiEEIAdBf2oiByAISg0ACyAIIQcLAkACQCAJIAt9IAQgA1StfSIKQgBZDQAgCSEKDAELIAogBCADfSIEhEIAUg0AIAVBMGogASACQgBCABBsIAVBOGopAwAhAiAFKQMwIQQMAQsCQCAKQv///////z9WDQADQCAEQj+IIQMgB0F/aiEHIARCAYYhBCADIApCAYaEIgpCgICAgICAwABUDQALCyAGQYCAAnEhCAJAIAdBAEoNACAFQcAAaiAEIApC////////P4MgB0H4AGogCHKtQjCGhEIAQoCAgICAgMDDPxBsIAVByABqKQMAIQIgBSkDQCEEDAELIApC////////P4MgByAIcq1CMIaEIQILIAAgBDcDACAAIAI3AwggBUGAAWokAAuuAQACQAJAIAFBgAhIDQAgAEQAAAAAAADgf6IhAAJAIAFB/w9ODQAgAUGBeGohAQwCCyAARAAAAAAAAOB/oiEAIAFB/RcgAUH9F0gbQYJwaiEBDAELIAFBgXhKDQAgAEQAAAAAAAAQAKIhAAJAIAFBg3BMDQAgAUH+B2ohAQwBCyAARAAAAAAAABAAoiEAIAFBhmggAUGGaEobQfwPaiEBCyAAIAFB/wdqrUI0hr+iC0sCAX4CfyABQv///////z+DIQICQAJAIAFCMIinQf//AXEiA0H//wFGDQBBBCEEIAMNAUECQQMgAiAAhFAbDwsgAiAAhFAhBAsgBAuSBAEDfwJAIAJBgARJDQAgACABIAIQCBogAA8LIAAgAmohAwJAAkAgASAAc0EDcQ0AAkACQCAAQQNxDQAgACECDAELAkAgAkEBTg0AIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAkEDcUUNASACIANJDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQcAAaiEBIAJBwABqIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQAMAgsACwJAIANBBE8NACAAIQIMAQsCQCADQXxqIgQgAE8NACAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLAkAgAiADTw0AA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAAL8gICA38BfgJAIAJFDQAgAiAAaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIFayICQSBJDQAgAa1CgYCAgBB+IQYgAyAFaiEBA0AgASAGNwMYIAEgBjcDECABIAY3AwggASAGNwMAIAFBIGohASACQWBqIgJBH0sNAAsLIAALXAEBfyAAIAAtAEoiAUF/aiABcjoASgJAIAAoAgAiAUEIcUUNACAAIAFBIHI2AgBBfw8LIABCADcCBCAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQQQALkAEBA38jAEEQayICJAAgAiABOgAPAkACQCAAKAIQIgMNAEF/IQMgABB9DQEgACgCECEDCwJAIAAoAhQiBCADTw0AIAFB/wFxIgMgACwAS0YNACAAIARBAWo2AhQgBCABOgAADAELQX8hAyAAIAJBD2pBASAAKAIkEQAAQQFHDQAgAi0ADyEDCyACQRBqJAAgAwvMAQEDfwJAAkAgAigCECIDDQBBACEEIAIQfQ0BIAIoAhAhAwsCQCADIAIoAhQiBWsgAU8NACACIAAgASACKAIkEQAADwsCQAJAIAIsAEtBAE4NAEEAIQMMAQsgASEEA0ACQCAEIgMNAEEAIQMMAgsgACADQX9qIgRqLQAAQQpHDQALIAIgACADIAIoAiQRAAAiBCADSQ0BIAAgA2ohACABIANrIQEgAigCFCEFCyAFIAAgARB7GiACIAIoAhQgAWo2AhQgAyABaiEECyAEC1kBAn8gAiABbCEEAkACQCADKAJMQX9KDQAgACAEIAMQfyEADAELIAMQhgEhBSAAIAQgAxB/IQAgBUUNACADEIcBCwJAIAAgBEcNACACQQAgARsPCyAAIAFuCwQAQQALBABCAAsrAQF/IwBBEGsiAiQAIAIgATYCDEEAKALcayAAIAEQOCEBIAJBEGokACABCx4BAX8gABCIASECQX9BACACIABBASACIAEQgAFHGwuHAQECf0EAIQECQEEAKALcayICKAJMQQBIDQAgAhCGASEBCwJAAkAgACACEIQBQQBODQBBfyEADAELAkAgAi0AS0EKRg0AIAIoAhQiACACKAIQTw0AIAIgAEEBajYCFCAAQQo6AABBACEADAELIAJBChB+QR91IQALAkAgAUUNACACEIcBCyAACwQAQQELAgALhwEBA38gACEBAkACQCAAQQNxRQ0AIAAhAQNAIAEtAABFDQIgAUEBaiIBQQNxDQALCwNAIAEiAkEEaiEBIAIoAgAiA0F/cyADQf/9+3dqcUGAgYKEeHFFDQALAkAgA0H/AXENACACIABrDwsDQCACLQABIQMgAkEBaiIBIQIgAw0ACwsgASAAawsEACMACwYAIAAkAAsSAQJ/IwAgAGtBcHEiASQAIAELFQBB0PzAAiQCQcj8AEEPakFwcSQBCwcAIwAjAWsLBAAjAQsNACABIAIgAyAAEQgACyQBAX4gACABIAKtIAOtQiCGhCAEEI8BIQUgBUIgiKcQCSAFpwsTACAAIAGnIAFCIIinIAIgAxAKCwv854CAAAIAQYAIC+BjaW5maW5pdHkALSsgICAwWDB4AHcAc3BvaWxlcmxvZy50eHQAaXBzL011bHRpTGFzdEtleS5pcHMAaXBzL1NlZWREaXNwbGF5LmlwcwBpcHMvTVBDb21ib0ZpeC5pcHMAaXBzL1NvZnRsb2NrQmxvY2tGaXguaXBzAGlwcy9EU1NHbGl0Y2hGaXguaXBzAGlwcy9DYW5kbGVGaXguaXBzAGlwcy9EZW1vRm9yY2VGaXJzdC5pcHMAaXBzL0F1dG9EYXNoQm9vdHMuaXBzAGlwcy9NYXBFZGl0cy5pcHMAaXBzL0dhbWVDbGVhckJ5cGFzcy5pcHMAaXBzL0J1ZmZGYW1pbGlhcnMuaXBzAGlwcy9Ob0RTU0Ryb3BzLmlwcwBpcHMvQnVmZlN1YndlYXBvbnMuaXBzAGlwcy9Ccm9rZW5NYWlkZW5zLmlwcwBSYW5kb21pemVyLmlwcwBpcHMvQ2FyZFVwX3YzX0N1c3RvbS5pcHMAaXBzL1Nob290ZXJTdHJlbmd0aC5pcHMAaXBzL1Blcm1hbmVudERhc2guaXBzAGlwcy9BbGxvd1NwZWVkRGFzaC5pcHMAaXBzL0NhcmRDb21ib3NSZXZlYWxlZC5pcHMAbmFuACVpPSVpAHdiAHJiAHIrYgByd2EAcm9tLmdiYQBQQVRDSABFT0YAYWxwaGEtOQBvcHQsMCxib29sLGlnbm9yZUNsZWFuc2UsSWdub3JlIENsZWFuc2luZywwCm9wdCwxLGJvb2wsYXV0b1J1bixBdXRvIFJ1biwwCm9wdCwyLGJvb2wsbm9Ec3MsRFNTIFBhdGNoLDAKb3B0LDMsYm9vbCxhbGxvd1NwZWVkRGFzaCxBbHdheXMgQWxsb3cgU3BlZWQgRGFzaCwwCm9wdCw0LGJvb2wsYnJlYWtNYWlkZW4sQnJlYWsgSXJvbiBNYWlkZW5zLDAKb3B0LDUsc2xpZGVyLHJlcUtleXMsUmVxdWlyZWQgTGFzdCBLZXlzLDAsOSwxCm9wdCw2LHNsaWRlcixhdmFpbEtleXMsQXZhaWxhYmxlIExhc3QgS2V5cywwLDksMQpvcHQsNyxib29sLGJ1ZmZGYW1pbGlhcixCdWZmIFJhbmdlZCBGYW1pbGlhcnMsMApvcHQsOCxib29sLGJ1ZmZTdWJ3ZWFwb24sQnVmZiBTdWJXZWFwb25zLDAKb3B0LDksYm9vbCxidWZmU2hvb3RlcixCdWZmIFNob290ZXIgU3RyZW5ndGgsMApvcHQsMTAsYm9vbCxkb05vdFJhbmRvbWl6ZUl0ZW1zLERvIE5vdCBSYW5kb21pemUgSXRlbXMsMApvcHQsMTEsYm9vbCxyYW5kb21JdGVtSGFyZE1vZGUsUmFuZG9tIEl0ZW0gSGFyZG1vZGUsMApvcHQsMTIsYm9vbCxoYWx2ZURTU0NhcmRzLEhhbHZlIERTUyBDYXJkcyBQbGFjZWQsMABFcnJvcjogTm8gaW5kZXggbWF0Y2hpbmcgSUQgaW4gZHJvcCB0YWJsZSBhcnJheS4ASW5pdGlhbGl6ZWQgYXJyYXlzIGFuZCBpbml0aWFsIGl0ZW1zLgBNYWxmb3JtZWQgSVBTIHBhdGNoLgBFcnJvciBvcGVuaW5nIHJvbS4KUHJlc3MgZW50ZXIgdG8gY2xvc2UuAEZhaWxlZCB0byBhcHBseSBJUFMuAFNlZWRlZCBSTkcuACwAKG51bGwpAFBlZGVzdGFsICVzOiAAUmVndWxhcjogAFJhcmU6IABXcm90ZSB0byBvZmZzZXQ6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U2tlbGV0b24AAEJhdHRsZSBBcmVuYSBTa2VsZXRvbiBTcGVhcgAAAAAAQmF0dGxlIEFyZW5hIEZsYW1lIERlbW9uAAAAAAAAAABCYXR0bGUgQXJlbmEgQm9uZSBUb3dlcgAAAAAAAAAAAEJhdHRsZSBBcmVuYSBGb3ggSHVudGVyAAAAAAAAAAAAQmF0dGxlIEFyZW5hIFBvaXNvbiBBcm1vcgAAAAAAAABCYXR0bGUgQXJlbmEgQmxvb2R5IFN3b3JkAAAAAAAAAEJhdHRsZSBBcmVuYSBBYmlvbmRhcmcAAAAAAAAAAAAAQmF0dGxlIEFyZW5hIExlZ2lvbgAAAAAAAAAAAAAAAABCYXR0bGUgQXJlbmEgTWFyaW9uZXR0ZQAAAAAAAAAAAEJhdHRsZSBBcmVuYSBNaW5vdGF1cgAAAAAAAAAAAAAAQmF0dGxlIEFyZW5hIEFyYWNobmUAAAAAAAAAAAAAAABCYXR0bGUgQXJlbmEgU3VjY3VidXMAAAAAAAAAAAAAAEJhdHRsZSBBcmVuYSBEZW1vbiBMb3JkAAAAAAAAAAAAQmF0dGxlIEFyZW5hIEFscmF1bmUAAAAAAAAAAAAAAABCYXR0bGUgQXJlbmEgSHllbmEAAAAAAAAAAAAAAAAAAEJhdHRsZSBBcmVuYSBEZXZpbCBBcm1vcgAAAAAAAAAAQmF0dGxlIEFyZW5hIEV2aWwgUGlsbGFyAAAAAAAAAABCYXR0bGUgQXJlbmEgSG9seSBBcm1vcgAAAAAAAAAAAEJhdHRsZSBBcmVuYSBEZXZpbAAAAAAAAAAAAAAAAAAAU2NhcnkgQ2FuZGxlAAAAAAAAAAAAAAAAAAAAAAAAAABUcmljayBDYW5kbGUAAAAAAAAAAAAAAAAAAAAAAAAAAE5pZ2h0bWFyZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATGlsaW0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMaWxpdGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE5vbmUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATGVhdGhlciBBcm1vcgAAAAAAAAAAAAAAAAAAAAAAAABCcm9uemUgQXJtb3IAAAAAAAAAAAAAAAAAAAAAAAAAAEdvbGQgQXJtb3IAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAADAAAAAAJDAAAAAAADAAADAAAMDEyMzQ1Njc4OUFCQ0RFRtF0ngBXnb0qgHBSD///PicKAAAAZAAAAOgDAAAQJwAAoIYBAEBCDwCAlpgAAOH1BRgAAAA1AAAAcQAAAGv////O+///kr///wAAAAAAAAAA/////////////////////////////////////////////////////////////////wABAgMEBQYHCAn/////////CgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiP///////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAQIEBwMGBQAAAAAAAAACAADAAwAAwAQAAMAFAADABgAAwAcAAMAIAADACQAAwAoAAMALAADADAAAwA0AAMAOAADADwAAwBAAAMARAADAEgAAwBMAAMAUAADAFQAAwBYAAMAXAADAGAAAwBkAAMAaAADAGwAAwBwAAMAdAADAHgAAwB8AAMAAAACzAQAAwwIAAMMDAADDBAAAwwUAAMMGAADDBwAAwwgAAMMJAADDCgAAwwsAAMMMAADDDQAA0w4AAMMPAADDAAAMuwEADMMCAAzDAwAMwwQADNNYNwAAAEHg6wALjAToAQAA6AEBAOgBAgDoAQMA6AEEAOgBBgDoAQcA6AEIAOgBBQDkAQAA5AEBAOQBAgDnAQAAAAAAAAAAAAAAAAAA5gEAAOYBAQDmAQIA5gEDAOYBBADmAQUA5gEGAOYBBwDmAQgA5gEJAOYBCgDmAQsA5gEMAOYBDQDmAQ4A5gEPAOYBEADmAREA5gESAOYBEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFA+UAAAAAAABQAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAcAAABIOgAAAAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACv////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWDcAAA==';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch === 'function'
      && !isFileURI(wasmBinaryFile)
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(wasmBinaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(function (instance) {
      return instance;
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      // Warn on some common problems.
      if (isFileURI(wasmBinaryFile)) {
        err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
      }
      abort(reason);
    });
  }

  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);

        return result.then(
          receiveInstantiationResult,
          function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  
  var PATH = {splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  function getRandomDevice() {
      if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      if (ENVIRONMENT_IS_NODE) {
        // for nodejs with or without crypto support included
        try {
          var crypto_module = require('crypto');
          // nodejs has crypto support
          return function() { return crypto_module['randomBytes'](1)[0]; };
        } catch (e) {
          // nodejs doesn't have crypto support
        }
      }
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return function() { abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"); };
    }
  
  var PATH_FS = {resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY = {ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = Buffer.alloc(BUFSIZE);
              var bytesRead = 0;
  
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().includes('EOF')) bytesRead = 0;
                else throw e;
              }
  
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
    }
  
  function alignMemory(size, alignment) {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    }
  function mmapAlloc(size) {
      abort('internal error: mmapAlloc called but `memalign` native symbol not exported');
    }
  var MEMFS = {ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          if (address !== 0) {
            // We don't currently support location hints for the address of the mapping
            throw new FS.ErrnoError(28);
          }
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  function asyncLoad(url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
      readAsync(url, function(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, function(event) {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });
      if (dep) addRunDependency(dep);
    }
  
  var ERRNO_MESSAGES = {0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"};
  
  var ERRNO_CODES = {};
  var FS = {root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        assert(typeof parent === 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        if (typeof type === 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          FS.forceLoadFile(node);
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },absolutePath:function() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },createFolder:function() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },createLink:function() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },joinPath:function() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },mmapAlloc:function() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },standardizePath:function() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      }};
  var SYSCALLS = {mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path, allowEmpty) {
        if (path[0] === '/') {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = FS.getStream(dirfd);
          if (!dirstream) throw new FS.ErrnoError(8);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = 0;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAP32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        HEAP32[(((buf)+(32))>>2)] = 0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        HEAP32[(((buf)+(56))>>2)] = (stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)] = 0;
        HEAP32[(((buf)+(64))>>2)] = (stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)] = 0;
        HEAP32[(((buf)+(72))>>2)] = (stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)] = 0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)] = tempI64[0],HEAP32[(((buf)+(84))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = varargs ? SYSCALLS.get() : 0;
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function abortOnCannotGrowMemory(requestedSize) {
      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  function _exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      exit(status);
    }

  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _setTempRet0(val) {
      setTempRet0(val);
    }


  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
ERRNO_CODES = {
      'EPERM': 63,
      'ENOENT': 44,
      'ESRCH': 71,
      'EINTR': 27,
      'EIO': 29,
      'ENXIO': 60,
      'E2BIG': 1,
      'ENOEXEC': 45,
      'EBADF': 8,
      'ECHILD': 12,
      'EAGAIN': 6,
      'EWOULDBLOCK': 6,
      'ENOMEM': 48,
      'EACCES': 2,
      'EFAULT': 21,
      'ENOTBLK': 105,
      'EBUSY': 10,
      'EEXIST': 20,
      'EXDEV': 75,
      'ENODEV': 43,
      'ENOTDIR': 54,
      'EISDIR': 31,
      'EINVAL': 28,
      'ENFILE': 41,
      'EMFILE': 33,
      'ENOTTY': 59,
      'ETXTBSY': 74,
      'EFBIG': 22,
      'ENOSPC': 51,
      'ESPIPE': 70,
      'EROFS': 69,
      'EMLINK': 34,
      'EPIPE': 64,
      'EDOM': 18,
      'ERANGE': 68,
      'ENOMSG': 49,
      'EIDRM': 24,
      'ECHRNG': 106,
      'EL2NSYNC': 156,
      'EL3HLT': 107,
      'EL3RST': 108,
      'ELNRNG': 109,
      'EUNATCH': 110,
      'ENOCSI': 111,
      'EL2HLT': 112,
      'EDEADLK': 16,
      'ENOLCK': 46,
      'EBADE': 113,
      'EBADR': 114,
      'EXFULL': 115,
      'ENOANO': 104,
      'EBADRQC': 103,
      'EBADSLT': 102,
      'EDEADLOCK': 16,
      'EBFONT': 101,
      'ENOSTR': 100,
      'ENODATA': 116,
      'ETIME': 117,
      'ENOSR': 118,
      'ENONET': 119,
      'ENOPKG': 120,
      'EREMOTE': 121,
      'ENOLINK': 47,
      'EADV': 122,
      'ESRMNT': 123,
      'ECOMM': 124,
      'EPROTO': 65,
      'EMULTIHOP': 36,
      'EDOTDOT': 125,
      'EBADMSG': 9,
      'ENOTUNIQ': 126,
      'EBADFD': 127,
      'EREMCHG': 128,
      'ELIBACC': 129,
      'ELIBBAD': 130,
      'ELIBSCN': 131,
      'ELIBMAX': 132,
      'ELIBEXEC': 133,
      'ENOSYS': 52,
      'ENOTEMPTY': 55,
      'ENAMETOOLONG': 37,
      'ELOOP': 32,
      'EOPNOTSUPP': 138,
      'EPFNOSUPPORT': 139,
      'ECONNRESET': 15,
      'ENOBUFS': 42,
      'EAFNOSUPPORT': 5,
      'EPROTOTYPE': 67,
      'ENOTSOCK': 57,
      'ENOPROTOOPT': 50,
      'ESHUTDOWN': 140,
      'ECONNREFUSED': 14,
      'EADDRINUSE': 3,
      'ECONNABORTED': 13,
      'ENETUNREACH': 40,
      'ENETDOWN': 38,
      'ETIMEDOUT': 73,
      'EHOSTDOWN': 142,
      'EHOSTUNREACH': 23,
      'EINPROGRESS': 26,
      'EALREADY': 7,
      'EDESTADDRREQ': 17,
      'EMSGSIZE': 35,
      'EPROTONOSUPPORT': 66,
      'ESOCKTNOSUPPORT': 137,
      'EADDRNOTAVAIL': 4,
      'ENETRESET': 39,
      'EISCONN': 30,
      'ENOTCONN': 53,
      'ETOOMANYREFS': 141,
      'EUSERS': 136,
      'EDQUOT': 19,
      'ESTALE': 72,
      'ENOTSUP': 138,
      'ENOMEDIUM': 148,
      'EILSEQ': 25,
      'EOVERFLOW': 61,
      'ECANCELED': 11,
      'ENOTRECOVERABLE': 56,
      'EOWNERDEAD': 62,
      'ESTRPIPE': 135,
    };;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf = Buffer.from(s, 'base64');
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


var asmLibraryArg = {
  "__sys_fcntl64": ___sys_fcntl64,
  "__sys_ioctl": ___sys_ioctl,
  "__sys_open": ___sys_open,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "exit": _exit,
  "fd_close": _fd_close,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "setTempRet0": _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

/** @type {function(...*):?} */
var _cotmr_core_version = Module["_cotmr_core_version"] = createExportWrapper("cotmr_core_version");

/** @type {function(...*):?} */
var _cotmr_option_list = Module["_cotmr_option_list"] = createExportWrapper("cotmr_option_list");

/** @type {function(...*):?} */
var _cotmr_randomize = Module["_cotmr_randomize"] = createExportWrapper("cotmr_randomize");

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
  return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
  return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
  return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");





// === Auto-generated postamble setup entry stuff ===

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive")) Module["keepRuntimeAlive"] = function() { abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory")) Module["zeroMemory"] = function() { abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory")) Module["abortOnCannotGrowMemory"] = function() { abort("'abortOnCannotGrowMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() { abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() { abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() { abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() { abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() { abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() { abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "handleException")) Module["handleException"] = function() { abort("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() { abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() { abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() { abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() { abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout")) Module["safeSetTimeout"] = function() { abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() { abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad")) Module["asyncLoad"] = function() { abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignMemory")) Module["alignMemory"] = function() { abort("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() { abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() { abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() { abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() { abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() { abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() { abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() { abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() { abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() { abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() { abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() { abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() { abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() { abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() { abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() { abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() { abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() { abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() { abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() { abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() { abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() { abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() { abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() { abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() { abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() { abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() { abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() { abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() { abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() { abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() { abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() { abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() { abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() { abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() { abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() { abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() { abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() { abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() { abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() { abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() { abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() { abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setImmediateWrapped")) Module["setImmediateWrapped"] = function() { abort("'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "clearImmediateWrapped")) Module["clearImmediateWrapped"] = function() { abort("'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "wget")) Module["wget"] = function() { abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS"] = FS;
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() { abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() { abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse")) Module["webglPrepareUniformLocationsBeforeFirstUse"] = function() { abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos")) Module["webglGetLeftBracePos"] = function() { abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromBase64")) Module["intArrayFromBase64"] = function() { abort("'intArrayFromBase64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tryParseAsDataURI")) Module["tryParseAsDataURI"] = function() { abort("'tryParseAsDataURI' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  _emscripten_stack_init();
  writeStackCookie();
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  EXITSTATUS = status;

  checkUnflushedContent();

  if (keepRuntimeAlive()) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      err(msg);
    }
  } else {
    exitRuntime();
  }

  procExit(status);
}

function procExit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    if (Module['onExit']) Module['onExit'](code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();





