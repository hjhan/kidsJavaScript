function yanghui_tri() {
    var triangle = new Array(10);
    // 遍历二维数组的第一层
    for (var i = 0;
         i < triangle.length;
         i++
    ) {
        triangle[i] = new Array(i + 1);// 初始化第二层数组的大小
        // 遍历第二层数组
        var line = "";
        for (var j = 0;
             j <= i;
             j++
        ) {
            // 将两侧的数组元素赋值为1
            if (i == 0 || j == 0 || j == i) {
                triangle[i][j] = 1;
            } else {// 其他数值通过公式计算
                triangle[i][j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
            }
            line += (triangle[i][j] + "\t");         // 输出数组元素
        }
        console.log(line);
    }
}
//yanghui_tri();


function test(n) {
    function print(arr) {
        var padding = n - arr.length;
        //noinspection JSValidateTypes
        console.log(padding);
        return padding > 0 ? "  ".repeat(padding) + arr.join(" ") : arr.join(" ");
    }

    var arr = new Array(n);
    for (var i = 0; i < n; i++) {
        if (i == 0) {
            arr.push(1);
        }
        else if (i == 1) {
            arr = [];
            arr.push(1);
            arr.push(1);
        }
        else {
            var arr2 = [];
            arr2.push(1);
            for (var j = 0; j < arr.length - 1; j++) {
                arr2.push(arr[j] + arr[j + 1]);
            }
            arr2.push(1);
            arr = [];
            arr = arr2;
        }
        console.log(print(arr));
    }
}

//test(20);

function triangle(n) {
    //指定数组
    var array = [];
    var traverse = function foo(current) {
        if (current.length <= n) {
            //合并到指定数组
            array = array.concat(current);
            //构建新的一层
            var newArray = [];
            newArray[0] = 1;
            newArray[current.length] = 1;
            for (var i = 0; i < current.length - 1; i++) {
                newArray[i + 1] = current[i] + current[i + 1];
            }
            foo(newArray);
        }
    };
    traverse([1]);
    return array;
}

var r = triangle(4);
console.log(r);