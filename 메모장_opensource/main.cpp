#include "mainwindow.h"
#include <QString>
#include <QApplication>




int main(int argc, char* argv[])
{
    QApplication app(argc, argv);
    MainWindow* window = new MainWindow;
    window->show();
    return app.exec();
}


// √‚√≥: https://hunit.tistory.com/243 [Ara Blog]