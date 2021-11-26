class ACTION_PEOPLE{
   static REQUESTING = 'REQUESTING'
   static RESOLVED = 'RESOLVED'
   static REJECT = 'REJECT'
    
    static requesting = function(){
        return {
            type :ACTION_PEOPLE.REQUESTING,
            payload : {
                isLoading : true,
                error : null,
                data : {}
            }
         }
        }
    static resoved = function(data){
        return {
            type : ACTION_PEOPLE.RESOLVED,
            data : [...data]
        }
    }
    static reject = function(data){
        return {
            type : ACTION_PEOPLE.REJECT,
            data
        }
    }
}

export default ACTION_PEOPLE;
