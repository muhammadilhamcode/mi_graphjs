var migraphjs ={
    vertice_of_source : 0,
    vertice_of_destination : 0,
    edge_connection_status : false,
    // menambahkan graph
    add_graph : function(vert_src, vert_dest){
       this.vertice_of_source = vert_src;
       this.vertice_of_destination = vert_dest;
       this.edge_connection_status = true;
    }
};
/* tinggal di jadikan array agar bisa banyak vertice dan edge */