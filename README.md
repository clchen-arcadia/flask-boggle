# Flask Boggle

A Flask app to play Boggle

## To run

1. Open the project subfolder  
2. Create a virtual environment  

        python3 -m venv venv  

3. Install from requirements.txt  

        pip3 install -r requirements.txt  

4. Run with flask  

        flask run  
    
    For Macs, usually some process already listen on port 5000 and you'll need to run  

        flask run -p 5001  

5. Then visit localhost:5000 or localhost:5001 on your browser  

6. To run tests  

        python3 -m unittest  
        python3 -m doctest -v {FILE_NAME}

## Screenshots

1. Boggle board  

![boggle board](images/screenshot1.png)

2. Rejects non-words  

![rejects non-words](images/screenshot2.png)

3. Rejects words not on board  

![rejects words not on board](images/screenshot3.png)

4. Accepts correct words on the board

![accepts correct words on the board](images/screenshot4.png)
