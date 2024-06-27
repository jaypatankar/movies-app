# Movie Listing App

This is a SvelteKit-based web application for listing, searching, and managing a watchlist of movies using the OMDB API.

## Features
- Search for movies
- View movie details
- Add and remove movies to/from watchlist
- User login and signup
- Filter movies by type

## Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your OMDB API key: `VITE_OMDB_API_KEY=YOUR_API_KEY`
4. Run the development server: `npm run dev`

## Usage
- Visit the home page to search and filter movies.
- Click on a movie to view its details.
- Use the watchlist page to manage your watchlist.
- Use the login/signup forms to create and access your account.

## Dependencies
- SvelteKit
- Axios

## License
MIT


## PROJECT TREE

```
movies-app
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 07
│  │  │  └─ b9539e33a46981e833b12b2c5d4e1cd4c43cf2
│  │  ├─ 08
│  │  │  └─ dcfebc83c7588e6f0fc6bfe5e60703d8c90247
│  │  ├─ 0a
│  │  │  └─ ef89953e3ec1154b2e809d79568b019bc4884c
│  │  ├─ 0b
│  │  │  └─ b612f9c8a636ddb4fe501240140d50d1a10c2d
│  │  ├─ 0c
│  │  │  └─ 189b03c3780c843bb5ad27dc850c778efc94ad
│  │  ├─ 14
│  │  │  └─ 41d9408f3aab1fad29bc4116968506ec1149ed
│  │  ├─ 16
│  │  │  └─ 87b49c30f55c8d756142278f2b0acaa5480d4f
│  │  ├─ 17
│  │  │  └─ 03da734f2c54b75235a582dc73eecb3f5d24b6
│  │  ├─ 1b
│  │  │  └─ a910d6b46e4cd78205da7366010cb717dee8f8
│  │  ├─ 24
│  │  │  └─ 84658e121dd0d5ce37e2eebd936f666c01c9e9
│  │  ├─ 25
│  │  │  └─ 3d71bc5bfa82535e3fccd6e64a7126ac588aea
│  │  ├─ 2c
│  │  │  └─ 0026c7c62ddb44bc9b02c51f5f6315f26483a1
│  │  ├─ 34
│  │  │  └─ ff78b34a4f581cd0a47733c181597269559552
│  │  ├─ 36
│  │  │  ├─ 517a40092e3aa70fc1e9968293d75e8c8e5fb9
│  │  │  ├─ 8b721e891b0332bcf1b29237fdced7f0f9ae1d
│  │  │  └─ d3e501375aa5d710bbc09fb53f4ef08f04e919
│  │  ├─ 39
│  │  │  └─ 1baf78095712fe5c3ebe4c2be337d864a9dac8
│  │  ├─ 3a
│  │  │  └─ aa7f9bdd70f6e9f57744abd18df7c3d62d1a8d
│  │  ├─ 3f
│  │  │  └─ be9d0c51673685887a258863083c7a30a52197
│  │  ├─ 43
│  │  │  └─ 49cb8e7737d93c8618a4369012ddf5c50fbaee
│  │  ├─ 47
│  │  │  └─ e9bd526dba97f52c028c849399cbfcfbdc6132
│  │  ├─ 49
│  │  │  └─ 492a83cc2fb3cdc02d42936c415735d446b5b5
│  │  ├─ 4a
│  │  │  ├─ 82086e244a6077387aabcca1636d349cb0c159
│  │  │  └─ b159468609c0a4d753a0f9b4f467a3ca5e4613
│  │  ├─ 4b
│  │  │  ├─ 226b6a2cf9f684d5da23b25eec5583c1cb778d
│  │  │  └─ bae38d272ec123a23e06b6f78e3d4041a0a217
│  │  ├─ 4c
│  │  │  └─ 41625e1b7e36caf2bfddab09d7757cb3745724
│  │  ├─ 4e
│  │  │  └─ 3a2bb24afe37264a2f72c7d65d6220a8795da0
│  │  ├─ 52
│  │  │  └─ 52fd5ec3329e1a064be024c5d009d38c2e6011
│  │  ├─ 53
│  │  │  └─ af7fbfcc330f98c6ed669cd75e40257e2a17ea
│  │  ├─ 55
│  │  │  ├─ bfcbe1d988826e846db71c58c5ce9bec7a6dcf
│  │  │  └─ e1bd75c93ced81b90685a0baa5d116458ca7fc
│  │  ├─ 56
│  │  │  └─ 082a33115d5ecd1263f5ffa4e733ee7f90e286
│  │  ├─ 5b
│  │  │  └─ b20df61c872767e5a7e3cf85caedbd7f245a3f
│  │  ├─ 5c
│  │  │  ├─ d10f2ffb955b2a584dcf248b8087e6b368b2e9
│  │  │  └─ e676612ebf910f459f7d5e3e4b2847d0c1bfbb
│  │  ├─ 5f
│  │  │  └─ 193107c9e6d0ee48e4ca2e713523cf88417efe
│  │  ├─ 68
│  │  │  └─ dd78dadc8e2735abaa5a784cb51e6b50dc8f87
│  │  ├─ 6d
│  │  │  ├─ 2ba713a84e19f994470833a8b213a1aa8c88a9
│  │  │  └─ e1dd5619cb8b0455dc8f8b622314044e65b2be
│  │  ├─ 6e
│  │  │  └─ c1a28d63b49d9288d0bc3bf3a341eb4edf3318
│  │  ├─ 70
│  │  │  └─ 1623bc4d8ae7e6cae546fcaf87844acb8783d5
│  │  ├─ 71
│  │  │  └─ 0b5120f3f5fa72d1fbda9073bcf2d2e86c5cc3
│  │  ├─ 72
│  │  │  ├─ 79af526cd48c804ba90117d51576ca686d44f5
│  │  │  └─ aef85e74eda26ecffa71b4cdf416514af9070d
│  │  ├─ 73
│  │  │  └─ b64518199da8e8f74e9fb6c2b67641f56fe7f5
│  │  ├─ 74
│  │  │  ├─ 077847a846ab2e517602a66e3d2c45d396453a
│  │  │  ├─ 3f07b2e50aaa12580b14be49a1242c2f3ac564
│  │  │  ├─ 645dab1d462018a80b8da1bd4596dbcf2b0969
│  │  │  ├─ 764931047f6675abffc887bf9e0cf3762fb1ae
│  │  │  └─ cbda9ad723915080c12ac4d0f0042a615bfcf0
│  │  ├─ 75
│  │  │  └─ 4cab52ddda6a62bfbe98bd577d47376f496a13
│  │  ├─ 77
│  │  │  └─ a5ff52c9239ef2a5c38ba452c659f49e64a7db
│  │  ├─ 79
│  │  │  └─ 518f716450203a2ce2c11665182cc439429a76
│  │  ├─ 7a
│  │  │  └─ 4e95eac5b917b6c15b190a9f5fe873bc6edf89
│  │  ├─ 7b
│  │  │  └─ e978b179b3c85328d89ed68bd2c0e96fff698d
│  │  ├─ 7d
│  │  │  └─ 088827611f3c0167d368ad3b19bdf66ce2613f
│  │  ├─ 7f
│  │  │  ├─ 046b380ff8921af48cbb4cc072fd299bd71331
│  │  │  ├─ 7946d23050d4f771a436472358bcd58735cc3c
│  │  │  └─ a43dd47e0924c0f0a1856900aaf50ab5efb346
│  │  ├─ 80
│  │  │  └─ 864b9de81f63e194d15ff0921847a25be5036e
│  │  ├─ 82
│  │  │  └─ 5b9e65af7c104cfb07089bb28659393b4f2097
│  │  ├─ 8b
│  │  │  ├─ 342458ae9a67d1088200e5e1c34634515c6025
│  │  │  └─ f30024d06082d02f7cf02db26fa1f376b2ea1d
│  │  ├─ 91
│  │  │  └─ 9564fde7663c44730b5adf0113c1e632225a97
│  │  ├─ 93
│  │  │  ├─ 23f7a46aa86c5939ce84adb1a4bde8cb1cab4a
│  │  │  └─ abd07dadbef99c59022d1491f5e8bc0b7ac5fc
│  │  ├─ 95
│  │  │  └─ 5f5fdf30e01422e42b4824f548ac6a3c6ab2aa
│  │  ├─ 96
│  │  │  └─ ef556d3533f5102e0bc0147239d8f9593d5d92
│  │  ├─ 97
│  │  │  ├─ 201ef364c81ef961a746c32fbe2f196d5a1b52
│  │  │  └─ 9609a7f89a53c305f87864be51fafc1fe79dd7
│  │  ├─ 9c
│  │  │  └─ 7445f55ec83c73dc7069b5b241c781923f9c51
│  │  ├─ a2
│  │  │  └─ e6e1660d7a32603aade76544457aacbdd97d7b
│  │  ├─ a7
│  │  │  ├─ 2419a63f412b459a8170094727c90e7dbf48d1
│  │  │  ├─ 3b1974b971bbd3c1f880acb98dbc77f7e7ba86
│  │  │  └─ 4b810bd5588be0b8e4be6cceeecd1d27fa8be5
│  │  ├─ a9
│  │  │  └─ 3e158373419f19a343ce9cced86444b153e604
│  │  ├─ aa
│  │  │  └─ 2dce69be3911b8aaf07f2543d63307172cc2ad
│  │  ├─ ac
│  │  │  └─ e594266105288f0490912724c98bb2a2e86546
│  │  ├─ ad
│  │  │  └─ ab28b6ccec0f06458f3a6588c4bb2d8c676826
│  │  ├─ ae
│  │  │  └─ 92d56da28fd7df518ebbf9af7dcdf4c658c124
│  │  ├─ b1
│  │  │  └─ 02a92c6a4e609ffb497575c5171b62e966aba0
│  │  ├─ b2
│  │  │  ├─ 203a7ca3ad75803d4eccbbca50d6f3ae411e7e
│  │  │  └─ 6778dc97e363d71a15c255e528d25f7813da17
│  │  ├─ b4
│  │  │  ├─ 5de0d4a820099498eeb322925e7a568b5027a0
│  │  │  └─ 98cded1ca5fcf6b9a68182be7244ebedb1fdd6
│  │  ├─ b5
│  │  │  └─ b9e264b80e698fd0cd800b28b5b022e1730c99
│  │  ├─ b6
│  │  │  ├─ bb5cd1ccfd3ab3733e44b0502394291fcaaf02
│  │  │  └─ f27f135954640c8cc5bfd7b8c9922ca6eb2aad
│  │  ├─ b8
│  │  │  └─ d823e43c471431185d417864e7fd2d754c01c4
│  │  ├─ bb
│  │  │  ├─ c0e1eda8c5178876c7598ec03a4ecfc23711da
│  │  │  └─ f8c7da43f0080dc6b9fb275f9583b7c17f1506
│  │  ├─ bc
│  │  │  └─ 5d249d333e3819948f623af10b889324141a50
│  │  ├─ bf
│  │  │  └─ 2ad052b02dabd97f88c7ce0f2b944a4e2729fe
│  │  ├─ c1
│  │  │  ├─ 2ca1909e2f0b54965cd9844059822871947985
│  │  │  └─ 3788fb0c7001c4ec44e945d0464f20697f4ca6
│  │  ├─ c2
│  │  │  └─ fc44ae10d0ae5b0d273c88ea223c78bbc64005
│  │  ├─ c6
│  │  │  └─ 22a26c9a503bc4cbbc7260fd1f9beaf0c71d8d
│  │  ├─ c7
│  │  │  ├─ 9f204ddd3b8447ac3cda9126aebda036c0a807
│  │  │  └─ eb966ef52d13f4dc950ecbd3beefd94de9cc34
│  │  ├─ c8
│  │  │  ├─ 65adec03496dec7e8e43f484e3c93dd3230f0e
│  │  │  └─ 7f727a208c7aa6c44511d0066d0d07a4265d05
│  │  ├─ d0
│  │  │  ├─ 4c77e9a50464bcec63788ca13a2568fb347440
│  │  │  └─ a8ca3da919c281f70a304501df3fccd959b78b
│  │  ├─ d1
│  │  │  └─ 392e2879df41345aeb805802f76e8d4147cc93
│  │  ├─ d2
│  │  │  └─ 9b2ea6e94008d9f5c3749ed7e28105a7d7f8f7
│  │  ├─ d3
│  │  │  └─ c8ced168b7a2d8019d1c39f0ad5ccb47d51336
│  │  ├─ d4
│  │  │  └─ 2e99caef9e94693614c1ff21e680a299c174a9
│  │  ├─ d5
│  │  │  └─ 00bf2dbe6dd5e27aa4ebb45e5d5e5bf56ed786
│  │  ├─ d7
│  │  │  └─ a4f2980591d9f9d543e1c88f8527a237367837
│  │  ├─ d8
│  │  │  └─ fcae4717f8abe00e719017687d1155bb2094d4
│  │  ├─ db
│  │  │  └─ b4997054ca06a09b65cf19c05ea43e236dfe47
│  │  ├─ dc
│  │  │  ├─ 0ed212a40bd19367f85d8d46b00795688bcf2a
│  │  │  └─ 5c9ae2498fa39f32817ebd205f672ba9b265dd
│  │  ├─ dd
│  │  │  └─ 21fb22968eb042fb769a38e817beb5b5fc2656
│  │  ├─ de
│  │  │  └─ e058d33eeb6d7f575d0a84300bfad673704887
│  │  ├─ e6
│  │  │  └─ 9ab97b7d2e3126dd7e9797661200fe208bb4f8
│  │  ├─ e7
│  │  │  └─ 39ef4b6c118bbd7c58a8ead8cd2344d5f981cf
│  │  ├─ e8
│  │  │  ├─ 97e3ded65fa5c97f3ca5c56fcde6073f7713a2
│  │  │  └─ e2cec3198e278138c17b23e7c39ccecde6c1fe
│  │  ├─ e9
│  │  │  ├─ e26a7c092fe2a7ea8f990ef8ab993865f43b64
│  │  │  └─ e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e
│  │  ├─ eb
│  │  │  └─ 295633bb3224c6b910e9cc1ba7ca73a78eed60
│  │  ├─ ed
│  │  │  └─ 8e9ceab06e486ac71de924d37911973e72be15
│  │  ├─ f1
│  │  │  ├─ 335d682f50669956ebf73bbf2230bf58e9e466
│  │  │  └─ 922090f75ad7d59b4ef86218902e75e9df2007
│  │  ├─ f3
│  │  │  └─ b817e888663f64866d4b6553c0f851f215bfb1
│  │  ├─ f6
│  │  │  └─ 6fb5c205d8dc60756f052c1a12315e218afd42
│  │  ├─ fa
│  │  │  └─ 1cfe1fa7005fdb31ccc963a3240b6d7d9cd51a
│  │  ├─ fc
│  │  │  └─ 93cbd9409f9809256c4c763bf205bba17f0a44
│  │  ├─ fe
│  │  │  └─ 7d2d6b50ce937a0c3cecaa9a3501dfe138b7c8
│  │  ├─ ff
│  │  │  └─ 2b3d270ae414373c4f4e3146a88d1ce1444957
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .npmrc
├─ .svelte-kit
│  ├─ ambient.d.ts
│  ├─ generated
│  │  ├─ client
│  │  │  ├─ app.js
│  │  │  ├─ matchers.js
│  │  │  └─ nodes
│  │  │     ├─ 0.js
│  │  │     ├─ 1.js
│  │  │     ├─ 2.js
│  │  │     ├─ 3.js
│  │  │     ├─ 4.js
│  │  │     ├─ 5.js
│  │  │     ├─ 6.js
│  │  │     ├─ 7.js
│  │  │     └─ 8.js
│  │  ├─ client-optimized
│  │  │  ├─ app.js
│  │  │  ├─ matchers.js
│  │  │  └─ nodes
│  │  │     ├─ 0.js
│  │  │     ├─ 1.js
│  │  │     ├─ 2.js
│  │  │     ├─ 3.js
│  │  │     ├─ 4.js
│  │  │     ├─ 5.js
│  │  │     └─ 6.js
│  │  ├─ root.svelte
│  │  └─ server
│  │     └─ internal.js
│  ├─ non-ambient.d.ts
│  ├─ output
│  │  ├─ client
│  │  │  ├─ .vite
│  │  │  │  └─ manifest.json
│  │  │  ├─ _app
│  │  │  │  ├─ immutable
│  │  │  │  │  ├─ assets
│  │  │  │  │  │  ├─ 0.DvjvHQeg.css
│  │  │  │  │  │  ├─ 2.DVMgaeny.css
│  │  │  │  │  │  ├─ 5.CSHob3JG.css
│  │  │  │  │  │  ├─ 6.BRktnHZ1.css
│  │  │  │  │  │  ├─ Input.CPI632cQ.css
│  │  │  │  │  │  ├─ MovieCard.DO64AVyR.css
│  │  │  │  │  │  ├─ _layout.w5mKIi-n.css
│  │  │  │  │  │  ├─ _page.BRktnHZ1.css
│  │  │  │  │  │  ├─ _page.CSHob3JG.css
│  │  │  │  │  │  ├─ _page.DVMgaeny.css
│  │  │  │  │  │  ├─ fira-mono-all-400-normal.B2mvLtSD.woff
│  │  │  │  │  │  ├─ fira-mono-cyrillic-400-normal.36-45Uyg.woff2
│  │  │  │  │  │  ├─ fira-mono-cyrillic-ext-400-normal.B04YIrm4.woff2
│  │  │  │  │  │  ├─ fira-mono-greek-400-normal.C3zng6O6.woff2
│  │  │  │  │  │  ├─ fira-mono-greek-ext-400-normal.CsqI23CO.woff2
│  │  │  │  │  │  ├─ fira-mono-latin-400-normal.DKjLVgQi.woff2
│  │  │  │  │  │  └─ fira-mono-latin-ext-400-normal.D6XfiR-_.woff2
│  │  │  │  │  ├─ chunks
│  │  │  │  │  │  ├─ Input.BD-QSUTa.js
│  │  │  │  │  │  ├─ MovieCard.CBZy839e.js
│  │  │  │  │  │  ├─ auth.Be3qkMZI.js
│  │  │  │  │  │  ├─ entry.TA3gKB_N.js
│  │  │  │  │  │  ├─ index.Bht4HIY_.js
│  │  │  │  │  │  ├─ scheduler.DYjDqSku.js
│  │  │  │  │  │  └─ stores.DNbqfD6O.js
│  │  │  │  │  ├─ entry
│  │  │  │  │  │  ├─ app.AKYkd74H.js
│  │  │  │  │  │  └─ start.Bj9kisTx.js
│  │  │  │  │  └─ nodes
│  │  │  │  │     ├─ 0.3YSZgx9r.js
│  │  │  │  │     ├─ 1.B7RH1G0w.js
│  │  │  │  │     ├─ 2.BAOVn2xd.js
│  │  │  │  │     ├─ 3.CpT-nJXQ.js
│  │  │  │  │     ├─ 4.Y0VK4ewA.js
│  │  │  │  │     ├─ 5.DdEb1XOA.js
│  │  │  │  │     └─ 6.COomUS-R.js
│  │  │  │  └─ version.json
│  │  │  ├─ favicon.png
│  │  │  └─ robots.txt
│  │  ├─ prerendered
│  │  │  └─ pages
│  │  │     └─ index.html
│  │  └─ server
│  │     ├─ .vite
│  │     │  └─ manifest.json
│  │     ├─ _app
│  │     │  └─ immutable
│  │     │     └─ assets
│  │     │        ├─ Input.CPI632cQ.css
│  │     │        ├─ MovieCard.DO64AVyR.css
│  │     │        ├─ _layout.w5mKIi-n.css
│  │     │        ├─ _page.BRktnHZ1.css
│  │     │        ├─ _page.CSHob3JG.css
│  │     │        ├─ _page.DVMgaeny.css
│  │     │        ├─ fira-mono-all-400-normal.B2mvLtSD.woff
│  │     │        ├─ fira-mono-cyrillic-400-normal.36-45Uyg.woff2
│  │     │        ├─ fira-mono-cyrillic-ext-400-normal.B04YIrm4.woff2
│  │     │        ├─ fira-mono-greek-400-normal.C3zng6O6.woff2
│  │     │        ├─ fira-mono-greek-ext-400-normal.CsqI23CO.woff2
│  │     │        ├─ fira-mono-latin-400-normal.DKjLVgQi.woff2
│  │     │        └─ fira-mono-latin-ext-400-normal.D6XfiR-_.woff2
│  │     ├─ chunks
│  │     │  ├─ Input.js
│  │     │  ├─ MovieCard.js
│  │     │  ├─ client.js
│  │     │  ├─ exports.js
│  │     │  ├─ index.js
│  │     │  ├─ internal.js
│  │     │  ├─ ssr.js
│  │     │  └─ stores.js
│  │     ├─ entries
│  │     │  ├─ fallbacks
│  │     │  │  └─ error.svelte.js
│  │     │  └─ pages
│  │     │     ├─ _layout.svelte.js
│  │     │     ├─ _page.svelte.js
│  │     │     ├─ _page.ts.js
│  │     │     ├─ auth
│  │     │     │  ├─ login
│  │     │     │  │  └─ _page.svelte.js
│  │     │     │  └─ signup
│  │     │     │     └─ _page.svelte.js
│  │     │     ├─ movies
│  │     │     │  └─ _page.svelte.js
│  │     │     └─ watchlist
│  │     │        └─ _page.svelte.js
│  │     ├─ index.js
│  │     ├─ internal.js
│  │     ├─ manifest-full.js
│  │     ├─ manifest.js
│  │     ├─ nodes
│  │     │  ├─ 0.js
│  │     │  ├─ 1.js
│  │     │  ├─ 2.js
│  │     │  ├─ 3.js
│  │     │  ├─ 4.js
│  │     │  ├─ 5.js
│  │     │  └─ 6.js
│  │     └─ stylesheets
│  ├─ tsconfig.json
│  └─ types
│     ├─ route_meta_data.json
│     └─ src
│        └─ routes
│           ├─ $types.d.ts
│           ├─ about
│           ├─ auth
│           │  ├─ $types.d.ts
│           │  ├─ login
│           │  │  └─ $types.d.ts
│           │  └─ signup
│           │     └─ $types.d.ts
│           ├─ login
│           ├─ movies
│           │  └─ $types.d.ts
│           ├─ signup
│           ├─ sverdle
│           │  └─ how-to-play
│           └─ watchlist
│              └─ $types.d.ts
├─ README.md
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ src
│  ├─ apis
│  │  └─ moviesApi.ts
│  ├─ app.d.ts
│  ├─ app.html
│  ├─ components
│  │  ├─ AuthLayout.svelte
│  │  ├─ Input.svelte
│  │  ├─ MovieCard.svelte
│  │  ├─ MovieModal.svelte
│  │  └─ WatchlistButton.svelte
│  ├─ lib
│  │  └─ images
│  │     ├─ github.svg
│  │     ├─ svelte-logo.svg
│  │     ├─ svelte-welcome.png
│  │     └─ svelte-welcome.webp
│  ├─ routes
│  │  ├─ +layout.svelte
│  │  ├─ +page.svelte
│  │  ├─ +page.ts
│  │  ├─ Header.svelte
│  │  ├─ auth
│  │  │  ├─ login
│  │  │  │  └─ +page.svelte
│  │  │  └─ signup
│  │  │     └─ +page.svelte
│  │  ├─ movies
│  │  │  └─ +page.svelte
│  │  ├─ styles.css
│  │  └─ watchlist
│  │     └─ +page.svelte
│  ├─ stores
│  │  ├─ auth.ts
│  │  ├─ user.ts
│  │  └─ watchlist.ts
│  └─ utils
│     ├─ constants.ts
│     ├─ db.ts
│     ├─ hashPassword.ts
│     └─ whoami.ts
├─ static
│  ├─ favicon.png
│  └─ robots.txt
├─ svelte.config.ts
├─ tailwind.config.js
├─ tsconfig.json
└─ vite.config.ts

```