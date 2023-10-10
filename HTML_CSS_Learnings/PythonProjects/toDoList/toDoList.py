from PyQt5.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QWidget, QPushButton, QLineEdit, QListWidget, QMessageBox
from PyQt5.QtGui import QFont
import sys

class TodoApp(QMainWindow):
    def __init__(self):
        super(TodoApp, self).__init__()

        self.setWindowTitle("To Do List")  # Set the window title
        self.tasks = []

        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)
        self.layout = QVBoxLayout(self.central_widget)

        self.taskEntry = QLineEdit()
        self.taskEntry.setFont(QFont("Helvetica", 12))
        self.layout.addWidget(self.taskEntry)

        self.addButton = QPushButton('Add Task')
        self.addButton.setFont(QFont("Helvetica", 12))
        self.addButton.setStyleSheet("background-color: #0052cc; color: #ffffff")
        self.addButton.clicked.connect(self.add_task)
        self.layout.addWidget(self.addButton)

        self.delButton = QPushButton('Delete Task')
        self.delButton.setFont(QFont("Helvetica", 12))
        self.delButton.setStyleSheet("background-color: #cc0000; color: #ffffff")
        self.delButton.clicked.connect(self.delete_task)
        self.layout.addWidget(self.delButton)

        self.taskList = QListWidget()
        self.taskList.setFont(QFont("Helvetica", 12))
        self.layout.addWidget(self.taskList)

    def add_task(self):
        task = self.taskEntry.text()
        if task != "":
            self.tasks.append(task)
            self.updateListbox()
        else:
            QMessageBox.warning(self, "Warning", "Please enter a task.")
        self.taskEntry.setText("")

    def delete_task(self):
        if len(self.tasks) > 0:
            task = self.taskList.currentItem().text()
            if task in self.tasks:
                self.tasks.remove(task)
            self.updateListbox()

    def updateListbox(self):
        self.taskList.clear()
        for task in self.tasks:
            self.taskList.addItem(task)

app = QApplication([])
window = TodoApp()
window.show()
sys.exit(app.exec_())