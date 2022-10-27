import React from "react";
import Tab from "./Tab";

export const App: React.FC = () => {
    return (

        <div>

            <h1>2022年度 備品調査</h1>
            <p>チェックボックスを選択する際、全選択全解除を使用しないでください。バグの原因になります。後ほど修正します。</p>
            <p>複数選択は大丈夫です
                
            </p>
            <Tab/>
               </div>
    );
};

//webページの上にタブをつける
