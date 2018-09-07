CC = gcc
ASM = nasm
LD = ld
MOUNT_POINT = /mnt/pandaOS

CC_FLAGS = -c -Wall -m32 -ggdb -gstabs+ -nostdinc -fno-builtin -fno-stack-protector
LD_FLAGS = -T link.ld -m elf_i386 -nostdlib

all: boot.o kernel.o link update_kernel

boot.o: boot.asm
	@echo 'Compiling boot, Making GRUP information...'
	$(ASM) -f elf boot.asm

kernel.o: kernel.c
	@echo 'Compiling kernel...'
	$(CC) $(CC_FLAGS) kernel.c -o kernel.o


.PHONY: kernel
link:
	@echo 'Linking boot and kernel, making last kernel...'
	$(LD) $(LD_FLAGS) boot.o kernel.o -o kernel

.PHONY: update_kernel
update_kernel:
	@echo 'Copy kernel to image..'
	@if [ ! -d $(MOUNT_POINT) ]; then mkdir $(MOUNT_POINT); fi
	sudo mount pandaOS.img /mnt/pandaOS
	sudo cp kernel /mnt/pandaOS/kernel
	sleep 1
	sudo umount /mnt/pandaOS

.PHONY: clean
clean:
	rm *.o kernel


