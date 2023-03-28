type User={
  name:string,
  messagesCount:number,
  warningsCount:number,
  regDate:Date
}
abstract class ConfidenceHelper{
  static checkConfidenceRatio(user:TrustedUser):boolean{
    return user.getConfidenceRatio()>=0
  }
}
class TrustedUser{
  user:User;
  constructor(user:User){
    this.user=user;
  }

  getConfidenceRatio():number{
    let days:number=Math.floor((Date.now()-Number(this.user.regDate))/(1000*60*60*24));
    return this.user.messagesCount*2-this.user.warningsCount*100+days;
  }
}

let users:User[]=[
  {
    name:"1",
    messagesCount:25,
    warningsCount:1,
    regDate:new Date(Date.now()-3110400000)
  },
  {
    name:"2",
    messagesCount:2525,
    warningsCount:7,
    regDate:new Date(Date.now()-5110400000)
  },
  {
    name:"3",
    messagesCount:257,
    warningsCount:30000,
    regDate:new Date(Date.now()-2110400000)
  },
  {
    name:"4",
    messagesCount:235,
    warningsCount:0,
    regDate:new Date(Date.now()-1110400000)
  },
  {
    name:"5",
    messagesCount:1578,
    warningsCount:10,
    regDate:new Date(Date.now()-110400000)
  },
  {
    name:"6",
    messagesCount:25,
    warningsCount:100,
    regDate:new Date(Date.now()-400000)
  },
  {
    name:"7",
    messagesCount:257527,
    warningsCount:1,
    regDate:new Date(Date.now()-3110400000)
  },
  {
    name:"8",
    messagesCount:0,
    warningsCount:0,
    regDate:new Date(Date.now()-1110400000)
  },
  {
    name:"9",
    messagesCount:25,
    warningsCount:112,
    regDate:new Date(Date.now()-4110400000)
  },
  {
    name:"10",
    messagesCount:2500,
    warningsCount:12,
    regDate:new Date(Date.now()-3550400000)
  },
]

users.forEach((x)=>{
  if (!ConfidenceHelper.checkConfidenceRatio(new TrustedUser(x)))
    console.log(x);
});