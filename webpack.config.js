module.exports ={
    entry:{
        bundle:"./src/index.ts" //コンパイルする対象ファイルを指定
    },
    output:{
        path:`${__dirname}/dist`, //コンパイル後のファイルをどこに保存するか
        filename:"bundle.js"
    },
    mode:"development", //productionモードにすると圧縮されてbundle.jsが軽くなる
    resolve:{
        extensions:[".ts",".js"], //import 等でパスを指定するときに、省略できる
    },
    devServer:{
        static:{
            directory:`${__dirname}/dist` //自動的にファイルが開くように設定
        },
        open:true,
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                loader:"ts-loader", //拡張子が.tsのファイルに対してのみts-loaderを実行する
            }
        ]
    }
}