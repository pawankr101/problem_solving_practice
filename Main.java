public class Main {
    public static String buildPattern(int n) {
        int iMin=(1-n), iMax=(n-1), jMin=0, jMax=(n-1);
        String pattern="";
        for(int i=iMin; i<=iMax; i++) {
            for(int j=jMin; j<=jMax; j++) {
                if(i==0 || j==0 || j==(n - Math.abs(i)-1)) pattern += "*";
                else pattern += " ";
            }
            pattern += "\n";
        }
        return pattern;
    }
    public static void main(String args[]) throws Exception {
        String pattern = Main.buildPattern(Integer.parseInt(args[0]));
        System.out.println(pattern);
    }
}