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

N x N의 크기를 가지는 마을 행렬이 있다. 각 행렬에는 건물의 유형을 뜻하는 숫자들이 있다. 발전기를 설치하려고 하는데, 가장 많은 단지의 수를 가지고 있는 건물의 유형들에만 발전기를 설치하려고 한다. '단지'의 기준은 한 건물에서 상,하,좌,우로 인접한 같은 유형의 건물의 수가 입력으로 들어오는 K보다 같거나 크면 된다. 이를 규칙을 따라, 어느 유형의 건물에 발전기가 설치될지 구하면 된다. (단지의 수가 같다면 건물 유형의 번호가 더 높은 것을 택한다.)

#### 전략

1. 두 말 할 것도 없이 깊이 우선 탐색, 혹은 너비 우선 탐색을 하면 되는 문제다.

#### 계획 검증

1에 대한 검증 -> N의 최댓값이 1000이고, DFS나 BFS 둘다 O(N^2)의 시간복잡도를 가지므로 충분히 시간 안에 통과할 수 있다.

#### 구현

이번에는 dfs를 사용하여 구현했다.

```
from collections import deque

def solution():
	N,K = map(int, input().split())
	city = []
	for _ in range(N):
		city.append(list(map(int, input().split())))

	visited = [[0] * N for _ in range(N)]

	result = {}

	for x in range(N):
		for y in range(N):
			if not visited[x][y]:
				building_type = dfs(x,y,city, visited, N, K)

				if building_type == -1:
					continue

				if not building_type in result:
					result[building_type] = 0
				result[building_type] += 1

	result_entry = list(result.items())
	result_entry.sort(reverse=True, key=lambda x: (x[1],x[0]))
	print(result_entry[0][0])

def dfs(x,y,city, visited, N, K):
	directions = [(-1,0),(1,0),(0,-1),(0,1)]
	stack = deque()
	stack.append((x,y))
	building_type = city[x][y]
	count = 0

	while len(stack) != 0:
		sx,sy = stack.pop()

		if visited[sx][sy]:
			continue
		visited[sx][sy] = 1
		count += 1

		for dx,dy in directions:
			nx,ny = sx + dx, sy + dy;
			if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny] and city[nx][ny] == building_type:
				stack.append((nx,ny))


	if count >= K:
		return building_type
	else:
		return -1


solution()

```

#### 트러블 슈팅

몇 번 계속 fail이 났었다. 분명히 논리적인 오류는 없을 텐데 왜지? 라는 의문을 가졌는데, 디테일에서 문제가 있었다. dfs에서 '방문 처리'는 엄연히 스택에서 원소가 pop 될 때 일어난다. 따라서 이때 실질적으로 방문이 일어난 것이므로, 이때 visited 배열의 값을 바꿔주고, 상하좌우로 인접한 건물이 몇 개 인지 헤아려주는 count 변수의 값도 올려줘야 정확하다. 이전에는 while 문에 들어가기 전, 미리 count의 값을 1로 설정해놨었다.

### 코드

생략

### 마치며

하마터면 며칠 전처럼 또 울화통이 터질 뻔 했으나 가까스로 문제를 찾았으니 다행이다. 분명히 논리적 오류가 없는 것 같은데 자꾸 몇개의 테스트 케이스에서 실패를 한다면,

1. 요구사항을 잘못 읽었거나 혹은 지나쳐 사소한 실수를 하지는 않았는가? (범위 등)
2. 작은 디테일에서 문제가 발생하지는 않았는가?

를 무조건 의심해봐야겠다.
