import { DataGridProps, Rows } from "../types/DataGridType";


const cellClickHandler =(rows :Rows[],{id}:{id:any})=>{

    console.log("clicked");
    
    var num =0 ;
    var x = rows.length; 

    for(var i = 0;x > i;i++){//配列の長さだけ繰り返す
      if(rows[i].id == id){//配列のidと扱っているidが同じ時
        num = i;//numに配列番号を記入
      }
    } 
    
    console.log(num);
    console.log(id);

    if(rows[num].flag){
      rows[num].flag = false;//ここで仮の削除フラグを立てる
      console.log("flagをfalseにしました");
    }else{
      rows[num].flag = true;//ここで仮の削除フラグを解除する
      console.log("flagをtureにしました");
    }
    console.log(rows[num].flag);
  }

  export {cellClickHandler};

  