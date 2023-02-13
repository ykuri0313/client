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
  - APIエンドポイントに対するリクエスト処理を配置する
- `validator`：APIレスポンスのプロパティ及び型が正しいかを検証する。
- `influstructure`
  -
  

## サービス概要
バックエンドリポジトリのREADMEに記載しております。
- https://github.com/ykuri0313/server
