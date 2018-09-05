ASM = nasm

all: boot.bin floppy

boot.bin: boot.asm
	@echo 'Compiling MBR...'
	$(ASM) boot.asm -o boot.bin


.PHONY: floppy
floppy: 
	@echo 'making floppy...'
	dd if=/dev/zero of=empty.img bs=512 count=2880
	dd if=boot.bin of=pandaOs.img bs=512 count=1
	dd if=empty.img of=pandaOs.img skip=1 seek=1 bs=512 count=2879

.PHONY: clean
clean:
	rm boot.bin *.img
