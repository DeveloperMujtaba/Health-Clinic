create table fleetservices
(
id int primary key identity(1,1) not null,
doyouearn nvarchar(200) not null,
cdllicense varchar(50) not null,
tt6 varchar(50) not null,
recommend varchar(50) not null,
ywhynot nvarchar(500),
fname nvarchar(50) not null,
lname nvarchar(50) not null,
addr nvarchar(250) not null,
addr1 nvarchar(250) not null,
city nvarchar(100),
_state nvarchar(100),
zip nvarchar(50),
email nvarchar(100) not null,
phone nvarchar(20) not null,
company nvarchar(100),
noofdrivers int,
addfb nvarchar(max)
);
go
create table contactform
(
id int primary key identity(1,1) not null,
_type nvarchar(100) not null, -- Attorney --Information --Question
name nvarchar(100) not null,
email nvarchar(100) not null,
phone nvarchar(20) not null,
fax nvarchar(20),
dlicense nvarchar(10) not null,
tickethelp nvarchar(50) not null,
citationno nvarchar(100) not null,
citationdate datetime not null,
complydate datetime not null,
conticket nvarchar(200) not null,
vcnumber nvarchar(20),
city nvarchar(100),
info nvarchar(max)
);