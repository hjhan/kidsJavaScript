//穷举4张牌的所有+ - * / 可能 , a?b?c?d,调换运算符号,调换abcd位置的话一共是4*4*3*4*2*4*1,一共1536种可能
// 考虑计算顺序的话1536*7=10752种可能
//由于时间关系,没有剔除掉符合交换律的数学等价算法,以及不改变计算顺序的括号
function computeQ(a, b, c, d) {
    var args = arguments;
    var fuhao = ['+', '-', '*', '/'],
        //(a?b)?c?d,(a?b)?(c?d),(a?b?c)?d,a?(b?c)?d,((a?b)?c)?d,(a?(b?c))?d,a?b?c?d一共有7种可能的计算顺序
        regs = [
            {
                which: '(a?b)?c?d',
                exp: /(\d+[\+\-\*\/]\d+)/,
                str: '($1)'
            },
            {
                which: '(a?b)?(c?d)',
                exp: /(\d+[\+\-\*\/]\d+)/g,
                str: '($1)'
            },
            {
                which: '(a?b?c)?d',
                exp: /(\d+[\+\-\*\/]\d+[\+\-\*\/]\d+)/,
                str: '($1)'
            },
            {
                which: 'a?(b?c)?d',
                exp: /([\+\-\*\/])(\d+[\+\-\*\/]\d+)([\+\-\*\/])/,
                str: '$1($2)$3'
            },
            {
                which: '((a?b)?c)?d',
                exp: /(\d+[\+\-\*\/]\d+)([\+\-\*\/]\d+)/,
                str: '(($1)$2)'
            },
            {
                which: '(a?(b?c))?d',
                exp: /(\d+[\+\-\*\/])(\d+[\+\-\*\/]\d+)/,
                str: '($1($2))'
            }
        ],
        numPostions = [],
        possibles = {},
        results = []
        ;
    //先把24种abcd位置的可能排列出来
    function arrL(arrToList) {
        //存放排列结果的数组
        //用于计算的初始数据结构
        var arrList = [];
        for (var i = 0; i < arrToList.length; i++) {
            arrList.push({arr: [arrToList[i]], used: [i]});
        }
        //这次循环后arrList=[{arr:[a],used:[0]},{arr:[b],used:[1]},{arr:[c],used:[2]},{arr:[d],used:[3]}]
        recur(arrList);
        //recur函数递归的扩展arrList,每次扩展时记录下排列的数组以及使用过的索引,arrList.length=4->12->24->24
        function recur(arr) {
            if (arr[0].arr.length == 4) {
                arr.forEach(function (item, index) {
                    numPostions.push(item.arr)
                });
            }
            else {
                var temp = [];
                arr.forEach(function (item, index) {
                    for (var i = 0; i < arrToList.length; i++) {
                        if (item.used.slice(0).indexOf(i) >= 0) {
                            continue;
                        }
                        else {
                            var ia = item.arr.slice(0);
                            ia.push(arrToList[i]);
                            var iu = item.used.slice(0);
                            iu.push(i);
                            temp.push({
                                arr: ia,
                                used: iu
                            })
                        }
                    }
                });
                recur(temp);
            }
        }
    }

    arrL(args);

    numPostions.forEach(getPossible);

    //把所有未区分括号的计算可能列出来
    function getPossible(numPosition) {
        //两种循环,一个循环运算位置,一个循环插入运算符号,然后标记且计算所有可能性,把结果为24的算法输出
        var a1a = [], a2a = [], a3a = [];
        var aall = [a1a, a2a, a3a];
        //大循环,循环每个运算位置
        for (var p = 0; p <= 2; p++) {
            //拼接每种可能的算法,每次小循环都生成一个到那个位置为止的数组,给大循环用
            //a1a表示第一次大循环时拼接好的暂时的可能算法组合,a2a,a3a以此类推
            //第一个位置时要把最前面的数字和后面一个数字作为字符添加上去
            if (p == 0) {
                for (var f = 0; f < fuhao.length; f++) {
                    a1a.push(numPosition[p].toString() + fuhao[f] + numPosition[p + 1]);
                }
            }
            //如果不是第一个位置,则要循环之前可能性的数组,比如p=1时,a1a中每个可能要再叠加上4种运算符
            //然后只需加上后面那个数字的字符拼接,生成a2a,然后再生成a3a
            if (p != 0) {
                aall[p - 1].forEach(function (item, index, arr) {
                    for (var f = 0; f < fuhao.length; f++) {
                        aall[p].push(item + fuhao[f] + numPosition[p + 1]);
                    }
                })
            }
        }
        //大循环结束后a3a是所有*未处理计算顺序*的可能算法代表的字面表示的数组
        a3a.forEach(function (item, index, arr) {
            //列所有可能的计算顺序,然后将每种算法字面表示量作为属性添加到possibles,将转换后计算的结果作为属性值
            //转换时字符串传给eval(),得出计算结果
            possibles[item] = eval(item);
            regs.forEach(function (reg) {
                var prob = item.replace(reg.exp, reg.str);
                possibles[prob] = eval(prob);
            })
        });

    }

    //循环遍历每个属性,如果属性值是24,则添加属性名到results
    for (var pos in possibles) {
        if (possibles[pos] == 24) {
            results.push(pos)
        }
    }
    //输出算法结果
    console.log(results.toString());
    return results
}

