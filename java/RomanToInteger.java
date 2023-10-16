import java.util.HashMap;

public class RomanToInteger {
    public static int romanToInt(String s) {
        // Create a HashMap to store the values of Roman numerals
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;//previous value
        for (int i = s.length() - 1; i >= 0; i--) {
            int curValue = romanValues.get(s.charAt(i));
            if (curValue >= prevValue) {
                result += curValue;
            } else {
                result -= curValue;
            }
            prevValue = curValue;
        }

        return result;
    }

    public static void main(String[] args) {
        String romanNumeral = "IX"; 
        int result = romanToInt(romanNumeral);
        System.out.println("The integer value of " + romanNumeral + " is " + result);
    }
}
