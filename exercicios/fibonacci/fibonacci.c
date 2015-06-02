#include <stdio.h>

int main()
{
	int n = 10, primeiro = 0, segundo = 1, prox, c;
	
	for (c = 0; c <= n; c++){
		if (c <= 1){
			prox = c;
			printf("[%d]: %d \n", c, prox);
		}
		else {
			prox = primeiro + segundo;
			primeiro = segundo;
			segundo = prox;
			printf("[%d]: %d \n", c, prox);
		}
	}
	return 0;
}