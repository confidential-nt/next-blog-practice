---
title: "goormlevel day5 풀이"
description: "goormlevel day5 문제는 어떻게 풀면 좋을까?"
date: "2023-08-01"
category: "goormlevel"
thumbnail: "goormlevel_thumbnail.jpg"
---

### 링크

https://level.goorm.io/l/challenge/goormthon-challenge?utm_source=notion&utm_medium=cta&utm_content=open&_gl=1*1pc3p5q*_gcl_au*MTk1MjUwOTM0OS4xNjkwNzc0NDA1

### 문제

문제, 입력, 출력은 긁어오기 힘드므로 링크 참고

### 입력

생략

### 출력

생략

### 접근 방법

#### 문제 재정의

정수 배열을 정렬을 하는 문제인데 그냥 정렬하는 게 아니라 우선 해당 원소를 이진수로 변환했을 때 1의 개수를 기준으로 내림차순으로 정렬하고, 만약 1의 개수가 같다면 원래 정수를 기준으로 내림차순으로 정렬한다.

N개의 정수를 입력받으며 K번째 정수를 찾는다. N은 1이상 50만 이하이며 K도 1이상 50만 이하이다. 각 정수는 1이상 2^20 이하이다.

#### 전략

1. 우선 배열을 [[입력으로 받은 원래 숫자, 이진수로 변환했을 때 1의 개수], ...] 의 형태로 갖춘다. 그리고 각 원본 숫자에 대하여 0이 될 때 까지 2로 나누는데, 만약 나머지가 있다면 이것은 해당 수의 이진수에서 1이 있다는 의미이므로 '이진수로 변환했을 때 1의 개수'를 1 증가 시켜준다. 이렇게 모든 숫자에 대해 계산하고 나서 정렬을 내림차 순으로 해주는데, 첫번째 정렬 기준은 이진수로 변환했을 때 1의 개수, 두번째 정렬 기준은 입력으로 받은 원래 숫자로 해주면 된다. 그리고 K번째의 값을 출력하면 된다.

이 문제의 포인트는 이진수로의 변환이고, 이진수로 변환했을 때 0이 몇갠지, 그리고 예를 들자면 2^2 자리에 위치에 1이 있는지, 이런 것은 하등 중요하지 않다는 것이다. 그래서 복잡한 자료구조나 알고리즘을 쓸 필요 없이 단지 그냥 2로 나누면서 1의 개수만 저장해두면 된다.

#### 계획 검증

1에 대한 검증 -> 정렬 알고리즘이 O(NlogN), 그리고 각 숫자에 대해 2로 나누는 것도 O(NlogN)이다. 이 문제의 최대 입력은 50만 이므로, 충분히 시간 안에 통과할 수 있다.

#### 구현

```
N, K = map(int, input().split())
numbers = [[el,0] for el in map(int, input().split())]

for index,num in enumerate(numbers):
	tmp = num[0]
	count = 0
	while tmp != 0:
		if tmp % 2 != 0:
			count+= 1
		tmp = tmp // 2
	numbers[index][1] = count

sorted_num = sorted(numbers, reverse=True, key=lambda x: (x[1],x[0]))	# 이런식으로 람다식에서 튜플 안에 정렬 키의 우선 순위를 정해두면 손쉽게 원하는 대로 정렬을 할 수 있다.
print(sorted_num[K-1][0])

```

#### 트러블 슈팅

https://goorm.notion.site/Python3-9065e21eb06e46a0942e828c1187181c
8월 21일, 문제 풀이를 보니 몇 가지 놀라운 깨달음을 얻을 수 있었다.

1. 파이썬에서는 10진수를 2진수로 변환해주는 내장 함수가 있다. 그리고 문자열로 리턴해준다.
2. sort를 적용할때, 각 원소들이 배열이면 이 함수는 자연스럽게 배열의 첫번째 원소를 기준으로 먼저 정렬을 하고, 두번째 원소를 기준으로 정렬을 한번 더 수행한다. 즉, 배열 안의 원소의 순서를 잘 조정하면 key가 따로 필요없다는 것이다.

### 코드

생략

### 마치며

생략
