---
title: "goormlevel day6 풀이"
description: "goormlevel day6 문제는 어떻게 풀면 좋을까?"
date: "2023-07-30"
category: "goormlevel"
thumbnail: "goormlevel_thumbnail.png"
---

### 링크

https://level.goorm.io/l/challenge/goormthon-challenge

### 문제

문제, 입력, 출력은 긁어오기 힘드므로 링크 참고

### 입력

생략

### 출력

생략

### 접근 방법

#### 문제 재정의

길이가 N인 문자열 S가 주어진다. 이 S를 3개의 '연속되는', '겹치지 않는' 부분 문자열로 나눈다. 그리고 이 나눈 결과에 대하여 중복을 제거하고 오름차순으로 정렬한 것을 P라고 한다. 각각 나눈 조합에 대하여 각 조합이 얻을 수 있는 점수는 조합에 들어있는 각 원소가 P에서 몇번 째 순서에 있느냐에 따라 달라진다. 이렇게 해서 점수를 구할 때, 얻을 수 있는 최대 점수를 출력하라.

#### 전략

1. 이 문제의 가장 핵심은 조합을 구하는 것이다. 나머지는 그냥 중복을 허용하지 않는 set에 넣어 정렬을 하고 점수를 합산하면 끝이다.

가능한 조합을 탐색을 해야하는데, 문자열이 연속되어야 하는 것이 가장 중요한 포인트다. 따라서, combinations를 이용하는 것은 적절하지 않다. 재귀호출이나 반복문 둘 중 하나를 택해야 하는데, 선택해야하는 개수가 3개 밖에 되지 않으므로 3중 반복문을 사용하기로 한다.

#### 계획 검증

1에 대한 검증 -> N은 최대 100이므로 O(N^3)이라도 100만번 정도의 연산만 하면 된다. 즉, 시간 초과가 나지 않을 것이다.

#### 구현

```python
def solution():
	N = int(input())
	S = input()

	comb = []
	comb_list = []
	result = []

	for i in range(N):
		for j in range(i+1,N): # N이 4고 i가 2,3 일때 j와 k에 해당하는 반복문은 조건에 의하여 돌지 않는다.
			for k in range(j+1,N):
				if (S[:i+1] + S[j:k] + S[k:]) != S :
					continue # 연속되지 않는 이상한 조합이 나오는 경우가 있어 (예를 들면 abcd를 입력했는데 {a,c,d} 같은 조합) 이 경우를 걸러주었다.
				comb_list.append(S[:i+1])
				comb_list.append(S[j:k])
				comb_list.append(S[k:])
				comb.append([S[:i+1],S[j:k], S[k:]])

	P = sorted(set(comb_list))
	P_map = {
		s:index+1 for index,s in enumerate(P)
	}

	for el in comb:
		sum_res = 0
		for i in range(3):
			sum_res += P_map[el[i]]
		result.append(sum_res)

	print(max(result))


solution()

```

#### 트러블 슈팅

8월 22일 오늘 해설지가 나왔다.
https://goorm.notion.site/Python3-d8c16efd4a7e422ba05276f15c0f4478

충격적인 부분은 이 문제를 combinations를 사용하여 풀 수 있었다는 것이다.

문자열 'abcd'가 있다고 할 때, 이들 사이의 공백이 있다고 가정해보자. a (1) b (2) c (3) d..
길이가 4인 문자열에는 3개의 공백이 생길 수 있으며, 이 공백들 중에서 2가지를 선택하는 조합을 고르는 일이 곧, 문자열을 세 부분으로 연속되게 쪼개는 방법의 수 임을 알 수가 있다.

~~큰 충격을 먹었다.~~

### 코드

생략

### 마치며

생략
