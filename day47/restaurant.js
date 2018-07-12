//餐馆，传入一个对象；
var Restaurant = function () {
        this.name = arguments[0].name;
        this.seats = arguments[0].seats;
        this.cash = arguments[0].cash;
        this.staffs = arguments[0].staffs;        
    }

    //招人，传入要创建的对象，创建，push到staffs中，并返回；
    Restaurant.prototype.hire = function() {
        var staff;
        // if(arguments[0] === 'Cook'){
        //     staff = new Cook(arguments[1]);
        //     staff.id = this.staffs.length;            
        //     this.staffs.push(staff);            
        // }else if(arguments[0] === 'Waiter'){
        //     staff = new Waiter(arguments[1]);
        //     staff.id = this.staffs.length;  
        //     this.staffs.push(staff);
        // }


        // staff = eval('new ' + arguments[0] + '(arguments[1])' );
        staff = new arguments[0](arguments[1]);         //第一个参数是类名
        staff.id = this.staffs.length; 
        this.staffs.push(staff);

        return staff;
    }

    //炒人，删除传入对象；
    Restaurant.prototype.fire = function() {
        var id = arguments[0].id;
        this.staffs.splice(id,1);
        for(let i = id; i < this.staffs.length; i++){
            this.staffs[i].id = i;
        }
    };
