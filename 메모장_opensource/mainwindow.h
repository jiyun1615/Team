// mainwindow.h
#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QTextEdit>
#include <QtCore/QTextCodec>

QString changeKor(const char*);

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget* parent = 0);
    ~MainWindow();

private:
    QTextEdit* notepad;

    void initial();
};

#endif // MAINWINDOW_H


// √‚√≥: https://hunit.tistory.com/243 [Ara Blog]
