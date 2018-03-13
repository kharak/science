from flask import Flask,render_template,request,redirect,url_for
app=Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')


@app.route("/quiz/0")
def quizFirst():
    data={"grade":"0"}
    return render_template('quiz.html',data=data)

@app.route("/quiz/1")
def quizSecond():
    data={"grade":"1"}
    return render_template('quiz.html',data=data)

@app.route("/quiz/2")
def quizThird():
    data={"grade":"2"}
    return render_template('quiz.html',data=data)

@app.route("/quiz/3")
def quizFour():
    data={"grade":"3"}
    return render_template('quiz.html',data=data)

@app.route("/quiz/4")
def quizFive():
    data={"grade":"4"}
    return render_template('quiz.html',data=data)


if __name__ == '__main__':
    app.secret_key='super_secrete_key'
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
