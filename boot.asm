; filename boot.asm

MBOOT_MAGIC equ 0x1BADB002
MBOOT_FLAGS equ 0x00
MBOOT_CHECKSUM equ - (MBOOT_MAGIC + MBOOT_FLAGS)

[BITS 32]

section .text
	dd MBOOT_MAGIC
	dd MBOOT_FLAGS
	dd MBOOT_CHECKSUM
	dd start

[GLOBAL start]
[EXTERN kernel_main]

start:
	cli
	call kernel_main
	jmp $

