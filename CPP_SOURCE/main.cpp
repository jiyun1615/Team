#include <iostream>
#include <cstdlib>
#include <fstream>
#include <string>

#define MAX_STR 1000

using namespace std;


int main()
{
    char inputStr[MAX_STR];
    
    cout << "Git Auto-Writing Program\n" << endl;
    cout << "문구를 입력하세요\n" << endl;
    cin >> inputStr;
    
    ofstream ofs("TESTFILE.txt");
    ofs << inputStr;
    ofs.close();
    
    if(ofs.is_open())
    {
        cout << "아직 열려있습니다. 닫고 다시 하세요.\n" << endl;
    } else
    {
        cout << "닫혔습니다. 수고하셨어요.\n" << endl;
    }
    
    return 0;
}
