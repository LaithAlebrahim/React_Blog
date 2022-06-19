#include<bits/stdc++.h>
#define ll long long
#define fi first
#define se second
using namespace std;

int main()
{
      freopen("self.in","r",stdin);
  int t;cin>>t;
  map<int,int>mp;
  while(t--){
    string s;
    cin>>s;
    for(int i=0;i<s.size();i++)
        mp[i]=s[i]-'0';
        int sol=0;
    for(int i=0;i<s.size();i++)
        mp[s[i]-'0']--;
       for(auto it:mp)
        if (it.second==0)sol++;

        if(sol==s.size())cout<<"self-describing"<<endl;
        else cout<<"not self-describing"<<endl;

  }
}

#include<bits/stdc++.h>
#define ll long long
#define fi first
#define se second
using namespace std;

int main()
{
    int st =1 ,en =1e8;
    while(st < en)
    {
        int m=(st+en )/2;
        char u ; cin>>u;
        fflush(stdout);
    cout<<m<<endl;
        if(u=='=')
        {
            fflush(stdout);
    cout<<"! "<<m<<endl;
            return 0;
        }
        if(u=='>')
        {
            st =m+1;
        }
        else if (u=='<')
        {
            en=m;
        }
    }
}
