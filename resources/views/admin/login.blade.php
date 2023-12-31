<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>管理</title>
    <style>
        /*
            html,
            body {
                height: 100%;
            }

            body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            form {
                text-align: right;
            }
            */
        /* Fonts */
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400);

        /* fontawesome */
        @import url(http://weloveiconfonts.com/api/?family=fontawesome);

        [class*="fontawesome-"]:before {
            font-family: 'FontAwesome', sans-serif;
        }

        /* Simple Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* body */
        body {
            background: #e9e9e9;
            color: #5e5e5e;
            font: 400 87.5%/1.5em 'Open Sans', sans-serif;
        }

        /* Form Layout */
        .form-wrapper {
            background: #fafafa;
            margin: 10em auto;
            padding: 0 1em;
            max-width: 370px;
        }

        h1 {
            text-align: center;
            padding: 1em 0;
        }

        form {
            padding: 0 1.5em;
        }

        .form-item {
            margin-bottom: 0.75em;
            width: 100%;
        }

        .form-item input {
            background: #fafafa;
            border: none;
            border-bottom: 2px solid #e9e9e9;
            color: #666;
            font-family: 'Open Sans', sans-serif;
            font-size: 1em;
            height: 50px;
            transition: border-color 0.3s;
            width: 100%;
        }

        .form-item input:focus {
            border-bottom: 2px solid #c0c0c0;
            outline: none;
        }

        .button-panel {
            margin: 2em 0 0;
            width: 100%;
        }

        .button-panel .button {
            background: #f16272;
            border: none;
            color: #fff;
            cursor: pointer;
            height: 50px;
            font-family: 'Open Sans', sans-serif;
            font-size: 1.2em;
            letter-spacing: 0.05em;
            text-align: center;
            text-transform: uppercase;
            transition: background 0.3s ease-in-out;
            width: 100%;
        }

        .button:hover {
            background: #ee3e52;
        }

        .form-footer {
            font-size: 1em;
            padding: 2em 0;
            text-align: center;
        }

        .form-footer a {
            color: #8c8c8c;
            text-decoration: none;
            transition: border-color 0.3s;
        }

        .form-footer a:hover {
            border-bottom: 1px dotted #8c8c8c;
        }
    </style>
</head>

<body>
    <main>
        <form method="POST" action="{{ route('admin.login.store') }}">
            @csrf
            <!--
                <div>
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    @error('failed')
    <p style="color:red">{{ $message }}</p>
@enderror
                    <button type="submit">ログイン</button>
                </div>
            -->
            <div class="form-wrapper">
                <h1>Log In</h1>
                <form>
                    <div class="form-item">
                        <label for="email"></label>
                        <input type="text" name="name" id="name" placeholder="Name"></input>
                    </div>
                    <div class="form-item">
                        <label for="password"></label>
                        <input type="password" name="password" id="password" placeholder="Password"></input>
                    </div>
                    <div class="button-panel">

                        @error('failed')
                            <p style="color:red">{{ $message }}</p>
                        @enderror

                        <input type="submit" class="button" title="Log In" value="Log In"></input>
                    </div>
                </form>

                <div class="form-footer"> <!--
                    <p><a href="#">Create an account</a></p>
                    <p><a href="#">Forgot password?</a></p>
                                -->
                </div>

            </div>

        </form>


    </main>
</body>

</html>
