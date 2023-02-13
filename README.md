## ディレクトリ構成
```
src
├── components
├── constant
├── feature
│   └── auth
│       └── provider
├── hooks
│   ├── components
│   └── pages
├── infrastructure
├── lib
│   └── firebase
├── pages
├── repositories
│   └── validator
├── styles
├── toViewModel
└── type
    ├── form
    ├── request
    ├── response
    ├── util
    └── viewModel
```
`components`
- pageを構成する小さなUI群を格納する
`hooks`
- カスタムフックを格納する
  - `pages`に必要なロジックは`hooks/pages/`配下に配置する
  - UIとロジックを分離するために、ロジックはhooksで定義し、propsとしてUIに流している。
- `repositories`
  - APIエンドポイントに対するリクエスト(fetch）処理を配置する
- `validator`：APIレスポンスのプロパティ及び型が正しいかを検証する。
- `influstructure`
  - HTTPリクエスト周りの共通処理を配置
   - 当面の間は、axiosを抽象化したクラスのみを設置（ここでidTokenの取得を行う）
- lib
  - ライブラリごとのディレクトリ分けに基づき、設定値等を記述。実際の値は`env`ファイルに記述し、git公開しないようにしている。
- `toViewModel`
  - fetchしたデータはスネークケースで記述されているため、ここに定義した関数を用いてキャメルケースに変換する。
- `type`
  - 型定義ファイルを配置 
  

## サービス概要
バックエンドリポジトリのREADMEに記載しております。
- https://github.com/ykuri0313/server
