import java.util.HashMap;
import java.util.Map;

public class ExtraordinarySubstrings {
    public static void main(String[] args) {
        // Define the mapping of characters to their respective values
        Map<Character, Integer> mapping = createMapping();
        System.out.println(mapping);

        // Input string
        String inputStr = "asdf";

        int count = countExtraordinarySubstrings(inputStr, mapping);

        System.out.println("Total number of non-empty extraordinary substrings: " + count);
    }

    private static Map<Character, Integer> createMapping() {
        Map<Character, Integer> mapping = new HashMap<>();
        char currentChar = 'a';
        int value = 1;
        for (int i = 0; i < 26; i++) {
            mapping.put(currentChar, value);
            if(i % 3 == 2) value++;
            currentChar++;
        }
        return mapping;
    }

    private static int countExtraordinarySubstrings(String inputStr, Map<Character, Integer> mapping) {
        int count = 0;
        int n = inputStr.length();
        int[] prefixSum = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            prefixSum[i] = prefixSum[i - 1] + mapping.get(inputStr.charAt(i - 1));
        }

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j <= n; j++) {
                if ((prefixSum[j] - prefixSum[i]) % (j - i) == 0) count++;
            }
        }

        return count;
    }
}
