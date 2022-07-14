import React from "react";
import Tab from "./Tab";
import Dialog from './Components/ui/Dialog'

export const App: React.FC = () => {
    return (

        <div>

            <h1>2022年度 備品調査</h1>
            学籍番号/名前/所在/電源/光学/ドライブ追加日（自動入力予定）/備考

            ---------ここにタブをつける----------
            <Tab/>
               </div>
    );
};

//webページの上にタブをつける
