package com.example.wlab3;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.*;
import java.util.ArrayList;

@WebServlet(name = "MainServlet", value = "/MainServlet")
public class MainServlet extends HttpServlet {
    //Read file, add new quantity value at the start of file, add at the end new slide, and rewrite buffer.txt file.
    //Then, make final.txt file from new buffer.txt file, and rewrite final.txt.
    public void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String isRewrite = request.getParameter("isRewrite");
        String userText = request.getParameter("userText");
        String userBackgroundURL = request.getParameter("userBackgroundURL");
        String newContent = "<img src=\"" + userBackgroundURL + "\" alt=\"" + "Slide image" + "\">\n" +
                "<div class=\"slideText\">" + userText + "</div>";

        String pathToBuffer = getServletContext().getRealPath("./buffer.txt");
        String pathToFinal = getServletContext().getRealPath("./final.txt");

        if(isRewrite != null){
            rewriteBuffer(pathToBuffer, newContent);
        } else{
            updateBuffer(pathToBuffer, newContent);
        }
        translateBufferToFinal(pathToBuffer, pathToFinal);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }


    /*------------------------------General functions------------------------------*/
    private void updateBuffer(String bufferFilename, String newContent){
        String newBufferContent = "";

        ArrayList<String> oldBuffer = readFile(bufferFilename);

        int currSlideNumber = Integer.parseInt( oldBuffer.get(0) );
        newBufferContent += currSlideNumber+1 + "\n";

        int i;
        for(i = 1; i < (2*currSlideNumber); i+=2){
            newBufferContent += oldBuffer.get(i) + "\n";
            newBufferContent += oldBuffer.get(i+1) + "\n";
        }
        //if(i > 1) newBufferContent += "\n";
        newBufferContent += newContent;

        writeFile(bufferFilename, newBufferContent);
    }

    private void rewriteBuffer(String bufferFilename, String newContent){
        String newBufferContent = "";
        newBufferContent += 1 + "\n";
        newBufferContent += newContent;

        writeFile(bufferFilename, newBufferContent);
    }

    private void translateBufferToFinal(String bufferFilename, String finalFilename){
        String newFinalContent = "";

        ArrayList<String> oldBuffer = readFile(bufferFilename);

        int currSlideNumber = Integer.parseInt( oldBuffer.get(0) );
        newFinalContent += currSlideNumber + "\n";
        newFinalContent += "<div class=\"slider\">" + "\n";

        for(int i = 1; i < (2*currSlideNumber); i+=2){
            newFinalContent += "<div class=\"item\">" + "\n";
            newFinalContent += oldBuffer.get(i) + "\n";
            newFinalContent += oldBuffer.get(i+1) + "\n";
            newFinalContent += "</div>" + "\n";
        }

        newFinalContent += "<a class=\"prev\" onclick=\"minusSlide()\">&#10094;</a>\n" +
                "<a class=\"next\" onclick=\"plusSlide()\">&#10095;</a>";

        newFinalContent += "</div>" + "\n";//end of <div class="slider">

        writeFile(finalFilename, newFinalContent);
    }
    /*-----------------------------------------------------------------------------*/
    /*------------------------------Service functions------------------------------*/
    private static ArrayList<String> readFile(String filename) {
        ArrayList<String> strings = new ArrayList<>();
        try(FileInputStream fis = new FileInputStream(filename);
            InputStreamReader isr = new InputStreamReader(fis);
            BufferedReader br = new BufferedReader(isr)) {
            String str;
            while((str = br.readLine()) != null){
                strings.add(str);
            }
        }catch (IOException e) {
            System.out.println("Error occurred while reading from file.");
            e.printStackTrace();
        }

        return strings;
    }

    private static void writeFile(String filepath, String content){
        try(FileOutputStream fos = new FileOutputStream(filepath);
            OutputStreamWriter osw = new OutputStreamWriter(fos);
            BufferedWriter bw = new BufferedWriter(osw)) {
            bw.write(content, 0, content.length());
        } catch (IOException e) {
            System.out.println("Error occurred while writing to file.");
            e.printStackTrace();
        }
    }
    /*-----------------------------------------------------------------------------*/
}
