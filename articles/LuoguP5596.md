## 题目描述 

小 X 遇到了一道题：

给定自然数 $a,b$，求满足下列条件的自然数对 $(x,y)$ 的个数：

$$y^2 - x^2 = ax + b$$

他不会，只好求助于精通数学的你。

如果有无限多个自然数对满足条件，那么你只需要输出 `inf` 即可。

## 输入输出格式

### 输入格式

一行两个整数 $a,b$。

### 输出格式

如果个数有限，一行一个整数，表示个数。

如果个数无限，一行一个字符串 `inf`。

## 输入输出样例

### 输入样例 #1
```plain
5 15
```

### 输出样例 #1
```plain
1
```

### 输入样例 #2
```plain
4 4
```
### 输出样例 #2
```plain
iinf
```
### 输入样例 #3 
```plain
12 6
```
### 输出样例 #3
```plain
0
```
### 输入样例 #4
```plain
96 96
```
### 输出样例 #4
```plain
7
```
### 输入样例 #5
```plain
10000 9999997
```
### 输出样例 #5
```plain
6
```

## 说明

【样例 1 说明】

$$(x,y) = (6,9)$$

---

**本题采用捆绑测试**。

- Subtask 1（3 points）：$a = b = 0$。
- Subtask 2（6 points）：$0 \le a,b \le 2$，不存在无限个数的情况。
- Subtask 3（9 points）：$0 \le a,b \le 100$，不存在无限个数的情况。
- Subtask 4（13 points）：$0 \le a,b \le 10^3$，不存在无限个数的情况。
- Subtask 5（14 points）：$0 \le a \le 10^4$，$0 \le b \le 10^7$。
- Subtask 6（14 points）：$a = 0$。
- Subtask 7（14 points）：$b = 0$。
- Subtask 8（27 points）：无特殊限制。

对于 $100\%$ 的数据，$0 \le a \le 10^8$，$0\le b \le 10^{15}$。

## Solution

这道肯定不能直接使用纯暴力，铁定$\rm TLE$ ~~（雾）~~

我们考虑因式分解，$(y - x)(y + x) = ax + b$

令$k = y - x$，上式可化为$k(k + 2x) = ax + b$

展开移项后可得$x = \frac{b - k ^ 2}{2k - a}$

暴力枚举$k$即可。

**特别的，当$b - k ^ 2 < 0, 2k - a > 0$时，即退出枚举**

## $\rm My\ Code$
```cpp
#include <cstdio>
#include <iostream>
#include <algorithm>
#include <cmath>
long long a, b, ans;
int main()
{
	std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    std::cout.tie(0);
    std::cin >> a >> b;
    if (a * a - 4 * b == 0) {
    	std::cout << "inf" << std::endl; 
    	return 0;
	}
	register long long x = 1, t = sqrt(b);
	if (t * t == b) {
		++ans;
	}
	while (1) {
		register long long W = b - x * x, S = 2 * x - a;
		if ((W > 0 && S > 0) || (W < 0 && S < 0)) {
			if (W % S == 0) {
				++ans;
			}
		}
		if (S > 0 && W < 0) {
			break;
		}
		++x;
	}
	std::cout << ans << std::endl;
	return 0;
}
```