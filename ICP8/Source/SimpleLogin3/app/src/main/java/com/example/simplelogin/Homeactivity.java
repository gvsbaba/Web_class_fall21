package com.example.icp8;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class Homeactivity extends AppCompatActivity {
    Button logOut;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_Homeactivity);

        logOut = findViewById(R.id.btnLogou);

        logOut.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Code here executes on main thread after user presses button
                Intent intent=new Intent(Homeactivity.this, MainActivity.class);
                startActivity(intent);
            }
        });



    }

}