//Java Solution

class Solution {
    public String frequencySort(String s) {
        Map<Character, Integer> map = new HashMap<>();
        
        for (char c : s.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        List<Character> keys = new ArrayList<>(map.keySet());
        Collections.sort(keys, (a,b) -> map.get(b) - map.get(a));
        
        StringBuilder sb = new StringBuilder();
        for (char c : keys) {
            int copies = map.get(c);
            while (copies > 0) {
                sb.append(c);
                copies--;
            }
        }
        
        return sb.toString();
    }
}