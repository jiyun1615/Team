#include <iostream>
#include <cstdlib>
#include <fstream>
#include <string>
using namespace std;


int main()
{
    string inputStr;
    
    cout << "Git Auto-Writing Program\n" << endl;
    cout << "문구를 입력하세요\n" << endl;
    cin >> inputStr;
    
    ofstream ofs("TESTFILE.txt");
    ofs << inputStr;
    ofs.close();
    
    ofs.is_open();
    
    return 0;
}
