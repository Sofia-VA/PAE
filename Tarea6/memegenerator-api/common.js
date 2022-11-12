// let msg = '';

// module.exports = function(param) {
//     if(param) {
//         msg = param
//     }
//     return msg;
// }

class Common{
    msg = '';

    getMessage() { return this.msg; }

    setMessage(msg) { this.msg = msg; }


}

module.exports = new Common();