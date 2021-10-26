package com.example.icp8;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.simplelogin.Homeactivity;

public class MainActivity extends AppCompatActivity {

    EditText Name ;
    EditText Password;
    Button Login;
    TextView Info;
    private int counter =5;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Name =  findViewById(R.id.userNameText);
        Password = findViewById(R.id.passwordText);
        Login = findViewById(R.id.loginButton);
        Info = findViewById(R.id.txt_view);

        Login.setOnClickListener(v -> {
            // Code here executes on main thread after user presses button
            validate();
        });

    }
    protected void validate() {
        if ((Name.getText().toString().equals("web")) && Password.getText().toString().equals("web")) {
            Intent intent=new Intent(MainActivity.this, Homeactivity.class);
            startActivity(intent);

        }else{

            Toast.makeText(getApplicationContext(), "wrong credentials",Toast.LENGTH_SHORT).show();

            Info.setBackgroundColor(Color.RED);
            counter--;
            Info.setText("invalid credentials");

            if (counter == 0){
                Login.setEnabled(false);
            }

        }

    }
}