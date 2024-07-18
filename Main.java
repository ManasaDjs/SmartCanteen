class Customer{
    int amt = 10000;
    synchronized void withdraw(int amt){
        System.out.println("withdrawing");
        if(this.amt <amt){
            System.ot.println("less balance");
            try{wait();}catch(Exception e){ };
        }
        this.amt -= amt;
    }
    synchronized void deposit(int dep){
        System.out.println("withdrawing");
        this.amt+=dep;
        notify();
    }
}
class main{
    public static void main(String args[]){
        final Customer c =new Customer();
        new Thread(){
            public void run(){c.withdraw(15000);}    
}.start();  
        new Thread(){
            pub;ic void run(){
                c.deposit(10000);
            }}.start();
        }
        }
    }
}