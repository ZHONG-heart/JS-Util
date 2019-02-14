
class Util {
    constructor(){

    }
    
    static formatDate(date, formatter) {
        /*
        * 格式化日期
        * @param date Date or timestamp
        * @param formatter yyyyMMddHHmmss
        */
        if (typeof date !== 'object') {
            date = new Date(date);
        }

        const transform = function(value) {
            return value < 10 ? '0' + value : value;
        };
        return formatter.replace(/^YYYY|MM|DD|hh|mm|ss|ms/g, function(match) {
            switch (match) {
                case 'YYYY':
                    return transform(date.getFullYear());
                case 'MM':
                    return transform(date.getMonth() + 1);
                case 'mm':
                    return transform(date.getMinutes());
                case 'DD':
                    return transform(date.getDate());
                case 'hh':
                    return transform(date.getHours());
                case 'ss':
                    return transform(date.getSeconds());
                case 'ms':
                return transform(date.getMilliseconds());
            }
        });
    }
    static getQueryParameter (name) {
        /*获取某个请求参数*/
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return '';
        } else {
            return results[1] || '';
        }
    }

    static selectText(element) {
        /*选中当前操作元素的文本*/
        let range, selection;

        if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        } else if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        }
    }
}
