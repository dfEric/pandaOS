int kernel_main()
{
	char *display_buf = (char*)0xb8000;
	unsigned int i = 0;
	const unsigned int total = 80*25*2;
	while(i < total)
	{
		display_buf[i++] = ' ';
		display_buf[i++] = 0x04;
	}
	const char *str = "Hello World, welcome to kernel new!";
	for(i = 0; '\0' != *str;)
	{
		display_buf[i++] = *(str++);
		display_buf[i++] = 0x04;
	}
	return 0;
}
