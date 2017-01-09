
import java.util.ArrayList;
import java.util.BitSet;
import java.util.List;

public class T{

    final static char[] digits = {
            '0' , '1' , '2' , '3' , '4' , '5' ,
            '6' , '7' , '8' , '9' , 'a' , 'b' ,
            'c' , 'd' , 'e' , 'f' , 'g' , 'h' ,
            'i' , 'j' , 'k' , 'l' , 'm' , 'n' ,
            'o' , 'p' , 'q' , 'r' , 's' , 't' ,
            'u' , 'v' , 'w' , 'x' , 'y' , 'z'
    };

    public void transform(int num, int base){
        List<Integer> list = new ArrayList<>();
        while(num != 0){
            list.add(num % base);
            num /= base;
        }
        for(int i=(list.size()-1); i>=0; i--){
            Integer integer = list.get(i);
            System.out.print(digits[integer]);

        }
    }

    public static void main(String[] args) {
        int n = 242344;
        T t = new T();
        t.transform(n,16);
        System.out.println("*************");
        System.out.println(Integer.toOctalString(n));
        System.out.println(Integer.toBinaryString(n));
        System.out.println(Integer.toHexString(n));

    }
}
