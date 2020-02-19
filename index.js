// class Util {
//   constructor() {}

//   static formatDate(date, formatter) {
//     /*
//      * 格式化日期
//      * @param date Date or timestamp
//      * @param formatter yyyyMMddHHmmss
//      */
//     if (typeof date !== "object") {
//       date = new Date(date);
//     }

//     const transform = function(value) {
//       return value < 10 ? "0" + value : value;
//     };
//     return formatter.replace(/^YYYY|MM|DD|hh|mm|ss|ms/g, function(match) {
//       switch (match) {
//         case "YYYY":
//           return transform(date.getFullYear());
//         case "MM":
//           return transform(date.getMonth() + 1);
//         case "mm":
//           return transform(date.getMinutes());
//         case "DD":
//           return transform(date.getDate());
//         case "hh":
//           return transform(date.getHours());
//         case "ss":
//           return transform(date.getSeconds());
//         case "ms":
//           return transform(date.getMilliseconds());
//       }
//     });
//   }
//   static getQueryParameter(name) {
//     /*获取某个URL请求参数*/
//     var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
//       window.location.href
//     );
//     if (results == null) {
//       return "";
//     } else {
//       return results[1] || "";
//     }
//   }
//   static delParamsUrl(url, name) {
//     /*删除某个URL的参数*/
//     var baseUrl = url.split("?")[0] + "?";
//     var query = url.split("?")[1];
//     if (query.indexOf(name) > -1) {
//       var obj = {};
//       var arr = query.split("&");
//       for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].split("=");
//         obj[arr[i][0]] = arr[i][1];
//       }
//       delete obj[name];
//       var url =
//         baseUrl +
//         JSON.stringify(obj)
//           .replace(/[\"\{\}]/g, "")
//           .replace(/\:/g, "=")
//           .replace(/\,/g, "&");
//       return url;
//     } else {
//       return url;
//     }
//   }
//   static selectText(element) {
//     /*选中当前操作元素的文本*/
//     let range, selection;

//     if (window.getSelection) {
//       selection = window.getSelection();
//       range = document.createRange();
//       range.selectNodeContents(element);
//       selection.removeAllRanges();
//       selection.addRange(range);
//     } else if (document.body.createTextRange) {
//       range = document.body.createTextRange();
//       range.moveToElementText(element);
//       range.select();
//     }
//   }
//   static dataType(data) {
//     /* String Number Object Array Date Boolean Function Null Undefined*/
//     return Object.prototype.toString.call(data).slice(8, -1);
//   }
//   //      将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
//   static ArrFlatSort(arr) {
//     return [...new Set(arr.flat(Infinity))].sort((a, b) => {
//       return a - b;
//     });
//   }

//   //实现destructuringArray方法
//   //效果如下
//   // destructuringArray( [1,[2,4],3], "[a,[b],c]" );

//   // result // { a:1, b:2, c:3 }
//   static destructuringArray(arr, str) {
//     let fn = `
//         const ${str} = ${JSON.stringify(arr)};
//         const arr=${JSON.stringify(str)}.match(/[a-z]+/ig);
//         const obj={};
//         for(let i of arr){
//             obj[i]=eval(i);
//         }
//         return obj;`;
//     return new Function("", fn)();
//   }

//   convert(str, mark) {
//     let _after = "";
//     let _array = str.split(mark);
//     if (_array.length < 3) {
//       return str;
//     }
//     let _pop = _array.pop();
//     let _shift = _array.shift();
//     let _length = _array.length;
//     console.log(_array, _length, _pop);
//     for (let i = 0; i < _length; i++) {
//       if (i % 2 === 0) {
//         if (mark === "$") {
//           _after += `<i>${_array[i]}</i>`;
//         } else if (mark === "*") {
//           _after += `<strong>${_array[i]}</strong>`;
//         }
//         // 自己添加转换的标签
//       } else {
//         _after += _array[i];
//       }
//     }
//     return `${_shift}${_after}${_pop}`;
//   }
// }
function formatDate(date, formatter) {
  /*
   * 格式化日期
   * @param date Date or timestamp
   * @param formatter yyyyMMddHHmmss
   */
  if (typeof date !== "object") {
    date = new Date(date);
  }

  const transform = function(value) {
    return value < 10 ? "0" + value : value;
  };
  return formatter.replace(/^YYYY|MM|DD|hh|mm|ss|ms/g, function(match) {
    switch (match) {
      case "YYYY":
        return transform(date.getFullYear());
      case "MM":
        return transform(date.getMonth() + 1);
      case "mm":
        return transform(date.getMinutes());
      case "DD":
        return transform(date.getDate());
      case "hh":
        return transform(date.getHours());
      case "ss":
        return transform(date.getSeconds());
      case "ms":
        return transform(date.getMilliseconds());
    }
  });
}

module.exports = { formatDate };
