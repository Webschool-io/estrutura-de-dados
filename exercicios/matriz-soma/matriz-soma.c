#include <stdio.h>
#include <stdlib.h>

void add_elem(int m[][10],int linhas, int colunas);
void show(int m[][10],int linhas, int colunas);
void multiplicar(int m[][10], int n[][10], int o[][10], int limite);

int main(int argc, char *argv[]){
  int a[10][10], b[10][10], c[10][10];

  printf("Matriz A:\n");
  add_elem(a,2,2);
  printf("Matriz B:\n");
  add_elem(b,2,2);
  printf("Multiplicando...\n");
  multiplicar(a,b,c,2);

  show(c,2,2);

  return 0;
}

void add_elem(int m[][10], int linhas, int colunas){
  int i, j;

  for(i=0;i<linhas;i++){
      for(j=0;j<colunas;j++){
        printf("matriz[%d][%d]: ",i,j);
        scanf("%d",&m[i][j]);
      }
  }
}

void show(int m[][10],int linhas, int colunas){
  int i, j;
  for(i=0;i<linhas;i++){
      for(j=0;j<colunas;j++){
        printf("matriz[%d][%d]= %d\n",i,j,m[i][j]);
      }
  }
}

void multiplicar(int m[][10], int n[][10], int o[][10], int limite){
  int i,j,k;

  for(i=0;i < limite; i++){
    for(j=0;j < limite; j++){
      o[i][j] = 0;
      for(k=0; k < limite; k++){
        o[i][j] += m[i][k] + n[k][j];
      }
    }
  }
}
