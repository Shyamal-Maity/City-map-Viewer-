function fn1()
{
	var s = document.getElementById("selectbox");
	var city=s.options[s.selectedIndex].value;
	if(city=="D")
	{
		map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895986.2738101248!2d76.53087428653818!3d28.691250473417096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1594298596223!5m2!1sen!2sin";
	}
	if(city=="M")
	{
		map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160993757!2d72.74109891862184!3d19.08219783879775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1594299117770!5m2!1sen!2sin";
	}
	if(city=="C")
	{
		map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497512.46093295596!2d79.92881220420783!3d13.047374765813698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1594299276666!5m2!1sen!2sin";
	}
	if(city=="K")
	{
		map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942446.1530208212!2d87.76924206000578!3d22.675020621007896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1594299333248!5m2!1sen!2sin";
	}
	if(city=="B")
	{
		map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995401.790022315!2d77.07044010525242!3d12.953398472246134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1594299390877!5m2!1sen!2sin";
	}
}	