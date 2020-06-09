#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget* parent) :
    QMainWindow(parent)
{
    initial();
}

MainWindow::~MainWindow()
{

}

void MainWindow::initial() {

    resize(400, 300);    // 창의 기본크기 설정

    //객체 할당
    notepad = new QTextEdit(changeKor("아래에 메모하세요."));
    setCentralWidget(notepad);
}
QString changeKor(const char* strKor) {

    static QTextCodec* codec = QTextCodec::codecForName("eucKR");
    return codec->toUnicode(strKor);
}


출처: https://hunit.tistory.com/243 [Ara Blog]