/* Import Google Font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  min-height: 100vh;
  background-color: black;
}
.container{
  max-width: 990px;
  width: 100%;
  padding: 60px;
  background: lightblue;
  border-radius: 7px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.01);
}
.wrapper{
  border-radius: 5px;
  border: 1px solid #ccc;
}
.wrapper .text-input{
  display: flex;
  border-bottom: 1px solid #ccc;
}
.text-input .to-text{
  border-radius: 0px;
  border-left: 1px solid #ccc;
}
.text-input textarea{
  height: 250px;
  width: 100%;
  border: none;
  outline: black;
  resize: none;
  background: none;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
}
.text-input textarea::placeholder{
  color: black;
}
.controls, li, .icons, .icons i{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.controls{
  list-style: none;
  padding: 12px 15px;
}
.controls .row .icons{
  width: 38%;
}
.controls .row .icons i{
  width: 50px;
  color: black;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease;
  justify-content: center;
}
.controls .row.from .icons{
  padding-right: 15px;
  border-right: 1px solid #ccc;
}
.controls .row.to .icons{
  padding-left: 15px;
  border-left: 1px solid #ccc;
}
.controls .row select{
  color: black;
  border: none;
  outline: black;
  font-size: 18px;
  background: none;
  padding-left: 5px;
}
.text-input textarea::-webkit-scrollbar{
  width: 4px;
}
.controls .row select::-webkit-scrollbar{
  width: 8px;
}
.text-input textarea::-webkit-scrollbar-track,
.controls .row select::-webkit-scrollbar-track{
  background: #fff;
}
.text-input textarea::-webkit-scrollbar-thumb{
  background: #ddd;
  border-radius: 8px;
}
.controls .row select::-webkit-scrollbar-thumb{
  background: #999;
  border-radius: 8px;
  border-right: 2px solid #ffffff;
}
.controls .exchange{
  color: #adadad;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s ease;
}
.controls i:active{
  transform: scale(0.9);
}
.container button{
  width: 100%;
  padding: 14px;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  font-size: 17px;
  border-radius: 5px;
  background: blue;
}

@media (max-width: 660px){
  .container{
    padding: 20px;
  }
  .wrapper .text-input{
    flex-direction: column;
  }
  .text-input .to-text{
    border-left: 0px;
    border-top: 1px solid #ccc;
  }
  .text-input textarea{
    height: 200px;
  }
  .controls .row .icons{
    display: black;
  }
  .container button{
    padding: 13px;
    font-size: 16px;
  }
  .controls .row select{
    font-size: 16px;
  }
  .controls .exchange{
    font-size: 14px;
  }
}