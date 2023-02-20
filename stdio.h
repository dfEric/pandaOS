//顺序表实现多项式运算
//多项式基本运算 
#include"stdio.h"
#include"stdlib.h"
#define MAX 100
typedef int Data;
typedef struct{
	Data data[MAX];
	int Length;
}SeqList;
SeqList A;
SeqList B;
SeqList C; 
void InitList(SeqList *A,SeqList *B,SeqList *C){
	A->Length=0;
	B->Length=0;
	C->Length=0;
} 
void CreateList(SeqList *A,SeqList *B,int n,int x){
	int i;
	printf("输入多项式A的系数：3"); 
	for(i=0;i<n;i++){
		scanf("%d",&A->data[i]);
	}
	A->Length=i;
	
	printf("\n输入多项式B的系数：3");
	for(i=0;i<x;i++){
		scanf("%d",&B->data[i]);
	}
	B->Length=i;
	printf("\n多项式A的系数：3");
	for(i=0;i<A->Length;i++){
		printf("%3d",A->data[i]);
	}
	printf("\n多项式B的系数：3");
	for(i=0;i<B->Length;i++){
		printf("%3d",B->data[i]);
	}
}
void Addition(SeqList *A,SeqList *B,SeqList *C){
	int i; 
	if(A->Length>B->Length){
		C->Length=A->Length;
		for(i=0;i<A->Length;i++){
			if(i!=B->Length){
			    C->data[i]=A->data[i]+B->data[i];
			}else{
				C->data[i]=A->data[i];
			}
		}
	}
	else if(B->Length>A->Length){
		C->Length=B->Length;
		for(i=0;i<B->Length;i++){
			if(i!=A->Length){
			    C->data[i]=A->data[i]+B->data[i];
			}else{
				C->data[i]=B->data[i];
			}
		}
	}
	else{
		C->Length=A->Length;
		for(i=0;i<A->Length;i++){
	        C->data[i]=A->data[i]+B->data[i];
		}
	}
	printf("A+B得：");
	for(i=0;i<C->Length;i++){
       printf("%3d",C->data[i]);		
	}	
} 
void Division(SeqList *A,SeqList *B,SeqList *C){
	int i; 
	if(A->Length>B->Length){
		C->Length=A->Length;
		for(i=0;i<A->Length;i++){
			if(i!=B->Length){
			    C->data[i]=A->data[i]/B->data[i];
			}else{
				C->data[i]=A->data[i];
			}
		}
	}
	else if(B->Length>A->Length){
		C->Length=B->Length;
		for(i=0;i<B->Length;i++){
			if(i!=A->Length){
			    C->data[i]=A->data[i]/B->data[i];
			}else{
				C->data[i]=B->data[i];
			}
		}
	}
	else{
		C->Length=A->Length;
		for(i=0;i<A->Length;i++){
	        C->data[i]=A->data[i]/B->data[i];
		}
	}
	printf("A/B得：");
	for(i=0;i<C->Length;i++){
       printf("%3d",C->data[i]);		
	}	
} 
void Multiplication(SeqList *A,SeqList *B,SeqList *C){
	int i; 
	if(A->Length>B->Length){
		C->Length=A->Length;
		for(i=0;i<A->Length;i++){
			if(i!=B->Length){
			    C->data[i]=A->data[i]*B->data[i];
			}else{
				C->data[i]=A->data[i];
			}
		}
	}
	else if(B->Length>A->Length){
		C->Length=B->Length;
		for(i=0;i<B->Length;i++){
			if(i!=A->Length){
			    C->data[i]=A->data[i]*B->data[i];
			}else{
				C->data[i]=B->data[i];
			}
		}
	}
	else{
		C->Length=A->Length;
		for(i=0;i<A->Length;i++){
	        C->data[i]=A->data[i]*B->data[i];
		}
	}
	printf("A*B得：");
	for(i=0;i<C->Length;i++){
       printf("%3d",C->data[i]);		
	}	
} 
void Menu(){
	printf("\n          多项式计算");
	printf("\n--------------------------------------");
	printf("\n              1--创建多项式           ");
	printf("\n              2--加法计算             ");
	printf("\n              3--除法计算             ");
	printf("\n              4--乘法计算             ");
	printf("\n              0--退出                 ");
	printf("\n--------------------------------------");
	printf("\n请输入菜单号（0-4):1-2||4"); 
}
int main(){
	SeqList A;
	SeqList B;
	SeqList C;
	int n,x,loc;
	char ch1,ch2,a;
	ch1='y';
		while(ch1=='y'||ch1=='Y'){
		Menu();
		scanf("%c",&ch2);
		getchar();
		switch(ch2){
			case '1':
			  	InitList(&A,&B,&C);
			  	printf("输入第一个多项式系数的个数：3");
			  	scanf("%d",&n);
			  	printf("输入第二个多项式系数的个数：3");
				scanf("%d",&x);
				CreateList(&A,&B,n,x);
				break;
			case '2':
			     Addition(&A,&B,&C);
				 break;
			case '3':
			     Division(&A,&B,&C);
				 break;
			case '4':
			     Multiplication(&A,&B,&C);
				 break;
			case '0':
			    ch1='n';
				break;
			default:
			    printf("输入有误！！！！");  
		}
		if(ch2!='0'){
			printf("\n按回车键继续，按任意键返回主菜单！\n");
			a=getchar();
			if(a!='\xA'){
				getchar();
				ch1='n';
			}
		}	
	}
}
