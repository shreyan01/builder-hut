from graphviz import Digraph

# User Interaction Flowchart
user_flow = Digraph("User_Interaction_Flow", format="png")
user_flow.attr(rankdir="LR", size="8,5")

# Nodes
user_flow.node("User", "User", shape="oval", style="filled", color="lightblue")
user_flow.node("UI", "Frontend UI (Next.js)", shape="box", style="filled", color="lightyellow")
user_flow.node("Auth", "Authentication Service", shape="cylinder", style="filled", color="lightgrey")
user_flow.node("API", "Backend API (Node.js/Express)", shape="box", style="filled", color="lightyellow")
user_flow.node("DB", "Database (PostgreSQL)", shape="cylinder", style="filled", color="lightgrey")
user_flow.node("Storage", "Storage (S3/Azure Blob)", shape="cylinder", style="filled", color="lightgrey")

# Edges
user_flow.edge("User", "UI", "Access via Web/ Mobile")
user_flow.edge("UI", "Auth", "Login/Register (OAuth/JWT)")
user_flow.edge("UI", "API", "User Actions (Post, View, Interact)")
user_flow.edge("API", "DB", "Read/Write Data")
user_flow.edge("API", "Storage", "Upload/Fetch Files")
user_flow.edge("UI", "Storage", "Access Assets via CDN")

user_flow.render("/mnt/data/User_Interaction_Flow")

# System Architecture Diagram
sys_arch = Digraph("System_Architecture", format="png")
sys_arch.attr(rankdir="TB", size="10,7")

# Nodes
sys_arch.node("Frontend", "Frontend (Next.js)", shape="box", style="filled", color="lightyellow")
sys_arch.node("Backend", "Backend APIs (Node.js)", shape="box", style="filled", color="lightyellow")
sys_arch.node("Auth_Service", "Authentication Service", shape="box", style="filled", color="lightgrey")
sys_arch.node("DB_Postgres", "Database (PostgreSQL)", shape="cylinder", style="filled", color="lightgrey")
sys_arch.node("File_Storage", "File Storage (S3/Azure)", shape="cylinder", style="filled", color="lightgrey")
sys_arch.node("Search_Engine", "Search Engine (Elasticsearch)", shape="box", style="filled", color="lightgrey")
sys_arch.node("Cache", "Cache (Redis)", shape="cylinder", style="filled", color="lightgrey")

# Edges
sys_arch.edge("Frontend", "Backend", "API Calls")
sys_arch.edge("Frontend", "Auth_Service", "User Login/Auth")
sys_arch.edge("Backend", "DB_Postgres", "Store/Retrieve Data")
sys_arch.edge("Backend", "File_Storage", "Upload/Fetch Files")
sys_arch.edge("Backend", "Search_Engine", "Search Queries")
sys_arch.edge("Backend", "Cache", "Session Caching")

sys_arch.render("/mnt/data/System_Architecture")

# Data Flow Diagram
data_flow = Digraph("Data_Flow_Diagram", format="png")
data_flow.attr(rankdir="LR", size="8,5")

# Nodes
data_flow.node("User_UI", "User Interface (Web/Mobile)", shape="oval", style="filled", color="lightblue")
data_flow.node("API_Gateway", "API Gateway", shape="box", style="filled", color="lightyellow")
data_flow.node("Service_DB", "Database Service", shape="box", style="filled", color="lightgrey")
data_flow.node("Service_Storage", "Storage Service", shape="box", style="filled", color="lightgrey")
data_flow.node("Service_Search", "Search Service", shape="box", style="filled", color="lightgrey")

# Edges
data_flow.edge("User_UI", "API_Gateway", "User Requests")
data_flow.edge("API_Gateway", "Service_DB", "CRUD Operations")
data_flow.edge("API_Gateway", "Service_Storage", "File Operations")
data_flow.edge("API_Gateway", "Service_Search", "Search Queries")

data_flow.render("/mnt/data/Data_Flow_Diagram")

"/mnt/data/User_Interaction_Flow.png", "/mnt/data/System_Architecture.png", "/mnt/data/Data_Flow_Diagram.png"
